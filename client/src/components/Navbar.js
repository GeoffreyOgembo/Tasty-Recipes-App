import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='nn'>
      {/* navbar start */}
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-secondary ">
     <Link class="navbar-brand" to={'/'}>Tasty Recipes</Link>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 ">
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page"  to='/'>HOME</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/recipess'>RECIPE</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/recipedetailss'>RECIPE-DETAILS</Link>
        </li>
        
        <li class="nav-item">
        <Link className="nav-link" to='/login'>LOGIN</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/signup'>SIGN UP</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/logout'>LOG OUT</Link>
        </li>
        
        
        
        
      </ul>
      
    </div>
</nav>
      {/* navbar end */}
 </div>













    
  )
}

export default Navbar;
