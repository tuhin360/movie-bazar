import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';


function App() {
  const handleWatchTime = (time) =>{
    console.log(time);
  }
  return (
    <div>
        <nav className='header'>
          <Header></Header>
        </nav>

        <div className='main row'>
          <div className="home-container col-md-8">
            <Home handleWatchTime={handleWatchTime}></Home>
          </div>
          <div className="sideCart col-md-4 card">
            <SideCart></SideCart>
          </div>
        </div>
    </div>
  )
}

export default App
