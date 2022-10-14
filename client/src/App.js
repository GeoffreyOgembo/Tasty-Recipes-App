import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Recipe from './components/Recipe';
import RecipesContainer from './components/RecipesContainer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RecipeDetails from './components/RecipeDetails';



function App() {

  return (
    <div>
    <Navbar/> 

    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/recipes" element={<Recipe/>}></Route>
    {/* <Route exact path="/reviews" element={<Reviews/>}></Route> */}
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path="/signup" element={<SignUp/>}></Route>
    <Route exact path='/recipedetails' element={<RecipeDetails/>}></Route>
   </Routes>
       

    


    </div>
  );
}

export default App;