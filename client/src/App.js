import './App.css';
import { useEffect, useState } from "react";
import Home from './components/Navbar';
import Recipe from './components/Recipe';


function App() {

  return (
    <div>
<Home/>
    <Recipe/>
      {/* {recipes.map((recipes)=>(<Recipe key={recipes.id} title={recipes.title}
       description={recipes.description} ingredients = {recipes.ingredients} 
       image_url={recipes.image_url} user_id={recipes.user.id}> */}
  
  {/* </Recipe>)) } */}
    </div>
  );
}

export default App;
