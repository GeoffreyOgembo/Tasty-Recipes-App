import './App.css';

import { useEffect, useState } from "react";
import { BrowserRouter as  Route, Routes } from 'react-router-dom';

import Recipes from './Components/Recipes/Recipes';
import RecipesContainer from './Components/Recipes/RecipesContainer';
import Home from './components/Navbar';
import Recipe from './components/Recipe';


function App() {

  return (
    <div>
<Home/>
    <Recipe/>
    <RecipesContainer/>
      {/* {recipes.map((recipes)=>(<Recipe key={recipes.id} title={recipes.title}
       description={recipes.description} ingredients = {recipes.ingredients} 
       image_url={recipes.image_url} user_id={recipes.user.id}> */}
  
  {/* </Recipe>)) } */}

    </div>
  );
}

export default App;