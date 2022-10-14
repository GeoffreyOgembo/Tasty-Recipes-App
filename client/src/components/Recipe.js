// import React from 'react'
// import { useEffect, useState } from 'react';
// import StarRating from './StarRating';
// import Reviews from './Reviews';
// const Card = (props) => {
//     return ( 
      
// <div class="row row-cols-1 row-cols-md-2">
//   <div class="col">
//     <div class="card">
//       <img src={props.data.image_url} class="card-img-top" alt="..."></img>
//       <div class="card-body">
//         <h5 class="card-title">{props.data.title}</h5>
//         <p class="card-text">{props.data.description}</p>
//         <Reviews/>
//         <StarRating/>

//       </div>
//     </div>
//   </div>
// </div> 

//     )
//   }
  
//   function cardData(recipes) {
//     var values = Object.values(recipes);
//     return values.map((info, idx) => {
//       return <Card data={info} key={idx} />;
//     })
//   }
  
//   function Recipe({title, description, ingredients, image_url, user_id}) {
//     const [recipes, setRecipes] = useState([]);
    
//     useEffect(() => {
//       fetch("/recipes")
//         .then((r) => r.json())
//         .then((recipes) => setRecipes(recipes));
//     }, []);
//     return (
//       <div>
//       {cardData(recipes)}

//     </div>
//   )
// }

// export default Recipe;

import React, { useState, useEffect } from "react";

import StarRating from "./StarRating";


export default function Recipes() {
   
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
            <img
              src={recipe.image_url}
              alt="#"
                     
            />
           <StarRating/>
                    </div>
        </div>
      ))}
    </div>
  );
};