import React from 'react'
import { useState } from 'react'



const NewRecipe = () =>{
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image_url, setImage_url] = useState("");
  const [user_id, setUser] = useState('');
  

  //console.log(genres.split(" "));
  const checkValidInputs = (title, description, ingredients, image_url, user_id) => {
    //ensure no empty values submited to the db
    if (title !== "" && description !== "" && ingredients !== "" && image_url !== ""  && user_id !== "" ){
      console.log("All inputs available")
      return true;
    }
  }
  //submit handler for created recipe
  const handleSubmit = (e) => {
    e.preventDefault();

    const NewRecipe = {
      title: title,
      description: description,
      ingredients: ingredients,
      image_url: image_url,
      user_id: user_id,

      
     
    }

    //validate inputs
    const isValid = checkValidInputs(title, description, ingredients, image_url, user_id);

    if (!isValid) {
      console.log("Ensure all inputs are filled");
      return;
    }

    fetch(`http://localhost:3000/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(NewRecipe),
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

    //clear inputs after submiting
    setTitle("");
    setDescription("");
    setIngredients("");
    setImage_url("")
    setUser(" ");
    
    
  }


  return (
    <div className="new-recipe">
            <h3>Create a new recipe</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Description</label>
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>ingredients</label>
                <input type="text" placeholder="ingredients" value={ingredients} onChange={(e) => SetIngredients(e.target.value)} />
                <label>image_url</label>
                <input type="text" placeholder="image_url" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
                <label>user</label>
                <input type="text" placeholder="user_id" value={user_id} onChange={(e) => setUser(e.target.value)} />
                <button>Create</button>
            </form>
    </div>
  )
}
export default NewRecipe;