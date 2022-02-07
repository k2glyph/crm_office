const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const fs = require('fs');
const express = require('express');
const {body, validationResult} = require('express-validator');
const {phoneNumberFormatter} = require('./helper/formatter');
const fileupload = require('express-fileupload');
const axios = require('axios');
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
app.use(fileupload({
    debug: true
}));

const SESSION_FILE_PATH = './whatsapp-session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}

app.get('/addWhatsapp', (req, res) => {
    res.sendFile('addWhatsapp.blade.php', {root:__dirname});
});

const client = new Client({
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ],
    },
    session: sessionCfg
});

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

//Check Number
const checkRegisteredNumber = async function(number){
    const isRegistered = await client.isRegisteredUser(number);
    return isRegistered;
}

//Send message
app.post('/send-message', [
    body('number').notEmpty(),
    body('message').notEmpty(),
], async (req, res) =>{
    const errors = validationResult(req).formatWith(({msg}) => {
        return msg;
    });
    if(!errors.isEmpty()){
        return res.status(422).json({
            status: false,
            message: errors.mapped()
        });
    }
    const number = phoneNumberFormatter(req.body.number);
    const message = req.body.message;

    const isRegisteredNumber = await checkRegisteredNumber(number);

    if(!isRegisteredNumber){
        return res.status(422).json({
            status: false,
            message: 'The number is not registered'
        });
    }

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

//Send media
app.post('/send-media', [
    body('number').notEmpty(),
    body('caption').notEmpty(),
], async (req, res) =>{
    const errors = validationResult(req).formatWith(({msg}) => {
        return msg;
    });
    if(!errors.isEmpty()){
        return res.status(422).json({
            status: false,
            message: errors.mapped()
        });
    }
    const number = phoneNumberFormatter(req.body.number);
    const caption = req.body.caption;

    // Send Media with URL
    const fileUrl = req.body.media;
    let mimetype;
    const attachment = await axios.get(fileUrl, {responseType: 'arraybuffer'}).then(response => {
        mimetype = response.headers['content-type'];
        return response.data.toString('base64');
    });
    const media = new MessageMedia(mimetype, attachment, 'Media');

    // Send Media with Choose File
    // const file = req.files.media;
    // const media = new MessageMedia(file.mimetype, file.data.toString('base64'), file.name);

    // Send Media in Path File
    // const media = MessageMedia.fromFilePath('./public/assets/img/example.jpg');

    const isRegisteredNumber = await checkRegisteredNumber(number);

    if(!isRegisteredNumber){
        return res.status(422).json({
            status: false,
            message: 'The number is not registered'
        });
    }

    client.sendMessage(number, media, {caption: caption}).then(response => {
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
