import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Recipe from './components/Recipe';
import RecipesContainer from './components/RecipesContainer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RecipeDetails from './components/RecipeDetails';
import React, {useEffect, useState } from "react";
import LogOut from './components/LogOut';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
    
    }
 
  return (
    <div>
    <Navbar/> 

    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/recipes" element={<Recipe/>}></Route>
    {/* <Route exact path="/reviews" element={<Reviews/>}></Route> */}
    <Route exact path="/login" element={<Login onLogin={handleLogin}/>}></Route>
    <Route exact path="/signup" element={<SignUp/>}></Route>
    <Route exact path='/recipedetails' element={<RecipeDetails/>}></Route>
    <Route exact path='/logout' element={<LogOut/>}></Route>

   </Routes>
       

    


    </div>
  );
}

export default App;