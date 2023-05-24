import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Loggedin from './components/loggedin/Loggedin';




import NavbarModule from './components/loggedin/NavbarModule';
import Footer from './components/loggedin/Footer';
import LevelCard from './components/loggedin/level/LevelCard';
import Forgot from './components/Forgot';
import Challenge from './components/loggedin/level/challenge/Challenge';
import Category from './components/loggedin/level/category/Category';




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
            <Route path='/forgot-password' element={<Forgot/>}></Route>
          <Route path="/login" Component={() =>
            <>
              <Navbar />
              <Login/>
            </>}/>
          <Route path="/modules" element={<Loggedin />} />
          <Route path="/level/:id" Component={() =>
            <>
            <NavbarModule/>
             <LevelCard/>
             <Footer/>
            </>}/>
            <Route path="/problems/:id" Component={() =>
            <>
            <NavbarModule/>
             <Challenge/>
             <Footer/>
            </>}/>


       
          <Route path="/register" Component={() =>
            <>
              <Navbar />
              <Register/>
            </>}/>
          <Route path="/detail/:id" element={<Category/>}/>
             

           
        </Routes>
        
    
      </BrowserRouter>
     
      </div>
  );
}

export default App;
