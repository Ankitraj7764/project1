import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        
       <Navbar/>
        <Routes>
        
          <Route  path="/" element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route  path="/register" element={<Register/>}/>
        </Routes>
     
      </BrowserRouter>
     
      </div>
  );
}

export default App;
