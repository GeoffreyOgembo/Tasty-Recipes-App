import React from "react";



// function RecipeDelete({recipes, onDeleteClick}) {
//     let id = 0;

//     function handleDeleteClick() {

//         id--;
//         onDeleteClick(id);
//       }
//   return (
//     <div className="dlt">
    
//     <RecipeDelete
//         key={recipes.id}
//         recipes={recipes}
//         onDeleteClick={handleDeleteClick}/>
//     </div>
//   )
// }

// export default RecipeDelete;

// import './services.css'
import { useNavigate } from 'react-router-dom'



function Recipes({recipes}) {
  let navigate = useNavigate()

  function deleteRecipe(id){
    fetch(`"/recipes${id}`,{
      method: "DELETE",
      headers: { 
        "Content-Type": "application/json" 
      },
    })
    .then((res)=>res.json())
    .then((data) => console.log(data))
      .catch((err)=>{
        console.log(err.message)
      })
    
      navigate('/', {replace: true})
      
  }
  return (
   <>
   <div className='col-md-4'>
    <div className='card my-3'>
      <div className='card-body'>
        <h5 className='card-text'>{Recipes.recipes_title}</h5>
        
      </div>
      
      <div className='buttons'>
        {/* <button className='btn btn-success mb-3'>Edit</button> */}
        <button className='btn btn-danger mb-3' onClick={()=>deleteRecipe(recipes.id)} >Delete</button>
      </div>
    </div>
   </div>
   </>
   
  )
}

export default Recipes