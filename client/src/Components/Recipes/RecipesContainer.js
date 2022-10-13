import React, {useEffect, useState}from 'react'
// import Spinner from '../../common/spinner/Spinner'
import Recipes from './Recipes'
import NewRecipe from '../NewRecipes/NewRecipe'


function RecipesContainer() {

    const[recipes, setRecipes]= useState([])
    const[loading, setLoading]= useState(true)

    
  
    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    }, []);


    function AddRecipes(newRecipe){
      setRecipes([...recipes, newRecipe])
    }

    const Recipes = recipes.map((recipes)=>(
      <Recipes
      key={recipes.id}
      recipe={recipes}
      onAddRecipes={AddRecipes}
      />
    ))

  return (
    <div>
      <h3>Recipes Provided</h3>
      {/* { loading? <Spinner/> :  */}
      <div className='container'>
        <div className='row'>
        
        {Recipes}
        </div>
      </div>
      
    </div>
  )
}

export default RecipesContainer