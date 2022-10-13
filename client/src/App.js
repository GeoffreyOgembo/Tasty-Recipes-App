import './App.css';
import { BrowserRouter as  Route, Routes } from 'react-router-dom';

import Recipes from './Components/Recipes/Recipes';
import RecipesContainer from './Components/Recipes/RecipesContainer';

function App({handleAddRecipe}) {
  return (
    <div className="App">

      <RecipesContainer/>
     
     
    </div>
  );
}

export default App;