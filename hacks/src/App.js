import React from 'react';
import './App.css';
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import App2 from './components/Home.jsx/home';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Track from './components/tracking/track';
import Admin from './components/Admin/Admin';
import Register from './components/login/login';

function App() {
  return (
    <div >
    <Routes>
        <Route path="/" element={<App2 />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/track" element={<Track />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/login" element={<Register />}></Route>
        
    </Routes>
    
     
    </div>
  );
}

export default App;
