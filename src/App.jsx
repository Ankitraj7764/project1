import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
        <Hero />
     
      </BrowserRouter>
     
      </div>
  );
}

export default App;
