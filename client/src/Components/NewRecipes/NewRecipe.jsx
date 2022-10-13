import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NewRecipe({AddRecipe}) {

    let navigate = useNavigate()
  

    const[newRecipe, setNewRecipe] = useState({
        recipe_title: "",
        recipe_description: "",
        recipe_ingredients: "",
        imag_url: "",
        

    })

    const handleChange = (e) =>{
        const title = e.target.title
        const value = e.target.value
        setNewRecipe({...newRecipe, [title]:value})
    }
  

    function handleAddRecipe(e){
        e.preventDefault();
        const AddRecipes ={
            recipe_title: newRecipe.recipe_title,recipe_description: newRecipe.recipe_description,
            recipe_ingredients: newRecipe.recipe_ingredients,image_url: newRecipe.imag_url
        }
        fetch("https://localhost:300/recipes", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(AddRecipes)            
        })
        .then((res)=>res.json())
        .then((AddRecipes)=>{
          
            setNewRecipe({
                recipe_title: "",
            })
            
        })
        navigate('/recipe',{replace: true})
        

    }
  return (
    <div>
        <div className='container'>
            <hr/>
            <div className='row'>
                <div className='d-flex justify-content-center '>
                    <form onSubmit={handleAddRecipe}>
                        <h3>Add New Recipe</h3>
                <div className="row g-3 align-items-center">
                <div className="col-auto">
                <label htmlFor="recipe_title" className="col-form-label">Recipe Name</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="recipe_title" 
                    className="form-control"
                    title='recipe_title'
                    onChange={handleChange}
                    />

                </div>
                <button type='submit' className='form-control btn btn-success'>Create</button>
                </div>
                </form>
                </div>
            </div>
            
        </div>
       
        
        </div>
  )
}

export default NewRecipe