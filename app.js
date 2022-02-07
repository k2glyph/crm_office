const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const fs = require('fs');
const express = require('express');
const app = express();
const server = require('http').Server(app);
// const socketIO = require('socket.io');
const io = require('socket.io')(server,{cors:{
    origin:"http://127.0.0.1:8000"
}});
// const io = socketIO(server);

const mysql = require('mysql');
const moment = require('moment');
const sockets = {};

const con = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'crm',
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const SESSION_FILE_PATH = './whatsapp-session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}

app.get('/addWhatsapp', (req, res) => {
    res.sendFile('addWhatsapp.blade.php', {root:__dirname});
});

const client = new Client({ puppeteer: { headless: true }, session: sessionCfg });

con.connect(function(err){
    if(err)
        throw err;
    console.log("Database Connected");
});


client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();

//Socket IO
io.on('connection', function(socket){
    socket.emit('message', 'Connecting...');
    client.on('qr', (qr) => {
        // Generate and scan this code with your phone
        console.log('QR RECEIVED', qr);
        qrcode.toDataURL(qr, (err, url) => {
            socket.emit('qr', url);
            socket.emit('message', 'QR Code Recived, scan please!');
        });
        // qrcode.generate(qr);
    });

    client.on('ready', () => {
        socket.emit('ready', 'Whatsapp is ready!');
        socket.emit('message', 'Whatsapp is ready!');
    });

    client.on('authenticated', (session) => {
        socket.emit('authenticated', 'Whatsapp is authenticated!');
        socket.emit('message', 'Whatsapp is authenticated!');
        console.log('AUTHENTICATED', session);
        sessionCfg=session;
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
            if (err) {
                console.error(err);
            }
        });
    });
})

//Send message
app.post('/send-message', (req, res) =>{
    const number = req.body.number;
    const message = req.body.message;

    client.sendMessage(number, message).then(response => {
        res.status(200).json({
            status: true,
            response: response,
        });
    }).catch(err =>{
        res.status(500).json({
            status: false,
            response: err,
        });
    });
});

server.listen(3000);

// http.listen(3000);
