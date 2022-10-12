import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
            <div className='logo'>
              <Link to='/'><h2>Tasty Recipes</h2></Link>
            </div>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className="navbar-nav navbar-right me-auto mb-2 mb-lg-0">
                <Link className='nav-link' to='/'>HOME</Link>
                <Link className='nav-link' to='/recipes'>RECIPES</Link>
                <Link className='nav-link' to='/reviews'>REVIEWS</Link>
                <Link className='nav-link' to='/user'>LOGIN</Link>
                <Link className='nav-link' to='/register'>SIGN UP</Link>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
