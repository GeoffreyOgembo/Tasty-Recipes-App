import React, {useEffect, useState}from 'react'
// import Spinner from '../../common/spinner/Spinner'
// import Recipes from './Recipes'
// import NewRecipe from '../NewRecipes/NewRecipe'
import Meal from './Meal'
function RecipesContainer() {
    const[recipes, setRecipes]= useState([])
    // const[loading, setLoading]= useState(true)
    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    }, []);
    function AddRecipes(newRecipe){
      setRecipes([...recipes, newRecipe])
    }

    function handleDeleteClick(id) {
      fetch(`/recipes/${recipes.id}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then((recipe) => onDeleteRecipe(recipe));
      
      if (window.confirm("Do you want to delete this recipe?")){
      recipes.splice(id,1);
      }
      setRecipes([...recipes])
      console.log(recipes)
        }
  
      
 
    // const Recipes = recipes.map((recipes)=>(
    //   <Recipes
    //   key={recipes.id}
    //   recipe={recipes}
    //   onAddRecipes={AddRecipes}
    //   />
    // ))
  return (
    <div>
      <h3>Recipes Provided</h3>
      {recipes.map((recipes)=>(<Meal key={recipes.id} title={recipes.title}
       description={recipes.description} ingredients = {recipes.ingredients}
       image_url={recipes.image_url} user_id={recipes.user.id}>
  </Meal>)) }
  <RecipeDelete 
                                 key={recipes.id}
                                 recipes={recipes}
                                onDeleteClick={handleDeleteClick}/>
{/* {recipes.map((recipes)=>(<Recipe key={recipes.id} title={recipes.title}
       description={recipes.description} ingredients = {recipes.ingredients}
       image_url={recipes.image_url} user_id={recipes.user.id}>
  </Recipe>)) } */}
      <div className='container'>
        <div className='row'>
        {/* {} */}
        </div>
      </div>
    </div>
  )
}
export default RecipesContainer