import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
     <nav className='navbar navbar-expand-lg navbar-dark bg-warning'>
        <div className='container-fluid'>
            <div className='logo'>
              <Link className='nav-link' to='/'><h2>Tasty Recipes</h2></Link>
            </div>
            
            
              <ul className="nav justify-content-end">
              
                <Link className="nav-link active" aria-current="page"  to='/'>HOME</Link>
               
                
                <Link className='nav-link' to='/recipes'>RECIPES</Link>
                

                
                <Link className='nav-link' to='/recipedetails'>RECIPE-DETAILS</Link>
               

                
                <Link className="nav-link" to='/login'>LOGIN</Link>
               

                
                <Link className='nav-link' to='/signup'>SIGN UP</Link>
               
              </ul>
            </div> 
        
    </nav>
    
    </div>
  )
}

export default Navbar;
