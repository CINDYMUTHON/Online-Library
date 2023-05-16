import React from 'react';
import Navbar from "./Navbar";
import "./Header.css";
import Login from './Login';

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
           
        </header>        
    </div>
  )
}

export default Header;

