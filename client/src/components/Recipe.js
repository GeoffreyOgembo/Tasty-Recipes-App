import React from 'react'
import { useEffect, useState } from 'react';

const Card = (props) => {
    return ( 
     
  <div class="row">
    <div class="col-md-8" >
      <div className="shadow p-3 mb-5 bg-white rounded">
      <div className="card">
      <div class="card-body">
  
        <a href={props.data.src}><h5 className="card-header">{props.data.title}</h5></a>
        <img className="image" src={props.data.image_url} alt="alt message"></img>
        <div className="card-body">{props.data.description}
        
       
          
        
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
  
  function cardData(recipes) {
    var values = Object.values(recipes);
    return values.map((info, idx) => {
      return <Card data={info} key={idx} />;
    })
  }
  
  function Recipe({title, description, ingredients, image_url, user_id}) {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    }, []);
    return (
      <div>
      {cardData(recipes)}

    </div>
  )
}

export default Recipe;