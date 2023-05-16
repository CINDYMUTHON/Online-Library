import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Bookshelf from './BookShelf';
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => {
    if (localStorage.getItem('isLoggedIn')){
      return 
      // <NavLink exact to="/bookshelf" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1' />
    } else {
      setShowLogin(true);
    }
  }

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <span className='text-uppercase fw-7 fs-24 ls-1'>online library</span>
          </Link>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav flex">
            <li className='nav-item'>
              <Link to = "/" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'> Home </Link>
            </li>
            <li className='nav-item'>
              <NavLink exact to = "/login" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1' onClick={() => setShowLogin(true)}> Login </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to = "/bookshelf" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1' 
              onClick={handleClick}> My Books </NavLink>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar