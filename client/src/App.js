// import logo from "./logo.svg";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import List from "./components/List";
import Home from "./components/Pages/Home";
import AboutMh from "./components/Pages/AboutMh";
import Blogs from "./components/Pages/Blogs";
import Services from "./components/Pages/Services";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Chat from "./components/Pages/Chat";
import Assesment from "./components/Pages/Assesment";
import Payment from "./components/Pages/Payment";
import Contact from "./components/Pages/Contact";
import Policy from "./components/Pages/Policy";
import Footer from "./components/Footer";
import Free from "./components/Pages/Free";
import LipaNaMpesa from "./components/Pages/LipaNaMpesa";
import Booking from './components/Pages/Booking'


import { useSelector } from "react-redux";
import { useState } from "react";
import { AppContext, socket } from "./context/appContext";


function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);
    return (
        <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
            <>
                {/* <Navigation /> */}
                <List/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMh />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/assesment" element={<Assesment />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/Pages/Free.js" element={<Free/>} />
                    <Route path="/Pages/Booking.js" element={<Booking />} />
                    <Route path="/Pages/LipaNaMpesa.js" element={<LipaNaMpesa/>} />
                </Routes>
                <Footer/>
                </>
        </AppContext.Provider>
    );
}

export default App;
