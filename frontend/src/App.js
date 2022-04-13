import React from "react"; 
import './index.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RoomChat from "./Pages/RoomChat";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/create-account" element={<Register />}/>
        <Route path="/crm-chat" element={<RoomChat />}/>
      </Routes>
    </div>
  );
}

export default App;
