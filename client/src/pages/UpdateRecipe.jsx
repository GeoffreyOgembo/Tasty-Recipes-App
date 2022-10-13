import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateRecipe() {
    const [recipeData, setRecipeData] = useState({})
    let { id } = useParams()
    let recipe_url = `http://localhost:3000/recipes/${id}`;

    useEffect(() => {
        fetch(recipe_url)
        .then(response=>response.json())
        .then(data=>setRecipeData(data))
    }, [])

    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PATCH", 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                recipe_title: recipeData.recipe_title,
                recipe_description: recipeData.recipe_description,
                recipe_ingredient: recipeData.recipe_ingredient,
                image_url: recipeData.image_url,
                user: recipeData.user
            })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
          navigate(`/recipe/${id}`)
        })
    };

  return (
    <div>
        <h1>Update Recipe</h1>
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
            <button>Update</button>
        </form>
    </div>
  )
}

export default UpdateRecipe;