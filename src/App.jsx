import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Loggedin from './components/loggedin/Loggedin';

import { useState } from 'react';


import NavbarModule from './components/loggedin/NavbarModule';
import Footer from './components/loggedin/Footer';
import LevelCard from './components/loggedin/level/LevelCard';



function App() {


  return (
    <div className="App">

      <BrowserRouter>
        

        <Routes>
        
          <Route path="/" Component={() =>
            <>
              <Navbar />
              <Hero />
             <Footer/>
            </>} />
          <Route path="/login" Component={() =>
            <>
              <Navbar />
              <Login/>
            </>}/>
          <Route path="/modules" element={<Loggedin />} />
          <Route path="/level" Component={() =>
            <>
            <NavbarModule/>
             <LevelCard/>
             <Footer/>
            </>}/>


       
          <Route path="/register" Component={() =>
            <>
              <Navbar />
              <Register/>
            </>}/>
        </Routes>
     
      </BrowserRouter>
     
      </div>
  );
}

export default App;
