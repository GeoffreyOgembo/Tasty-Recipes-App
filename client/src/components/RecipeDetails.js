import React, { useState, useEffect } from "react";


const RecipeDetails = (recipe) => {
    
    
    const [recipes, setRecipes] = useState();
    useEffect(() => {
            fetch("/recipes")
             .then((r) => r.json())
             .then((recipes) => setRecipes(recipes));
           }, []);


  return (

  
      <div className="container">
        <div className="row">
      
    {recipes?.map((recipe) => (
      <div key={recipe.id} className="col-md-4 card mt-5 mx-3">
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">{recipe.description}</p>
         <div className="">
          <h5>Ingredients</h5>
         <p className="card-text">{recipe.ingredients}</p>
         </div>
        </div>
      </div>
    
      

    ))}
    </div>
    </div>

               
);
};
  

export default RecipeDetails;