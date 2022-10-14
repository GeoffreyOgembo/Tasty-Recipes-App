import React, { useState, useEffect } from "react";


const RecipeDetails = (recipe) => {
    
    
    const [recipes, setRecipes] = useState();
    useEffect(() => {
            fetch("/recipes")
             .then((r) => r.json())
             .then((recipes) => setRecipes(recipes));
           }, []);


  return (

    <div className="recipes">
    {recipes?.map((recipe) => (
      <div key={recipe.id} className="recipe">
        <div>
          <h4>{recipe.title}</h4>
        </div>
        <div>
        
          <div>
          <h4>{recipe.description}</h4>
        </div>
        <div>
          <h4>{recipe.ingredients}</h4>
        </div>
        </div>
      </div>
    ))}
  </div>
               
);
};
  

export default RecipeDetails;