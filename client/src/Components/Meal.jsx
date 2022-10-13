import React from 'react'

function Meal({title, description, ingredients, image_url, user_id}) {
  return (
    <div>{title}
    {description}
    {ingredients}
    {image_url}
    {user_id}</div>
  )
}

export default Meal