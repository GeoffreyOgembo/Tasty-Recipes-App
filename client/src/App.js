import './App.css';
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Recipe from './components/Recipe';
import RecipesContainer from './components/RecipesContainer';
import Navbar from './components/Navbar';



function App() {

  return (
    <div>
    <Navbar/> 
    <Home/>
    <Recipe/>
    <RecipesContainer/>


    </div>
  );
}

export default App;