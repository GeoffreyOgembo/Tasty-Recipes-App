// import React from 'react'

// import Navbar from './Navbar'
// import Recipe from './Recipe'
// import { useEffect, useState } from 'react'




// // const Card = (props) => {
// //   return ( 
   
// // <div class="row">
// //   <div class="col-md-8" >
// //     <div className="shadow p-3 mb-5 bg-white rounded">
// //     <div className="card">
// //     <div class="card-body">

// //       <a href={props.data.src}><h5 className="card-header">{props.data.title}</h5></a>
// //       <img className="image" src={props.data.image_url} alt="alt message"></img>
// //       <div className="card-body">{props.data.description}

                     
// //       </div>
// //     </div>
// //     </div>
// //     </div>
// //     </div>
// //     </div>
// //   )
// // }

// // function cardData(recipes) {
// //   var values = Object.values(recipes);
// //   return values.map((info, idx) => {
// //     return <Card data={info} key={idx} />;
// //   })
// // }

// // function Home({title, description, ingredients, image_url, user_id}) {
// //   const [recipes, setRecipes] = useState([]);
  
// //   useEffect(() => {
// //     fetch("/recipes")
// //       .then((r) => r.json())
// //       .then((recipes) => setRecipes(recipes));
// //   }, []);


// function Home() {




//   return (
//     <div>
//       <div className='container'>
//         <p className="card-text">Best Food For Your Belly</p>
//       </div>
//       <div className='container'>
//         <div className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="https://images.themodernproper.com/billowy-turkey/production/posts/Shrimp-Fajitas-12.jpg?w=667&auto=compress%2Cformat&fit=crop&dm=1612803666&s=d42cc5a92e1bd7816c780404e248414a" className="d-block w-80 h-50" alt="..."/>
//           </div>
//           <div className="carousel-item">
//             <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F06%2F22%2Fnugget-burger-su-1076692-x.jpg&w=272&h=272&c=sc&poi=face&q=60" className="d-block w-80 h-50" alt="..."/>
//           </div>
//           <div className="carousel-item">
//             <img src="https://www.bowlofdelicious.com/wp-content/uploads/2015/11/Ahi-Tuna-Steaks-1.jpg" className="d-block w-80 h-50" alt="..."/>
//           </div>
//           <div className="carousel-item">
//             <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-80 h-50" alt="..."/>
//           </div>
//           <div className="carousel-item">
//             <img src="https://media.istockphoto.com/photos/fried-rice-with-ketchup-and-soy-sauce-picture-id1175434591?s=612x612" className="d-block w-80 h-50" alt="..."/>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

import React from 'react';




const Home = ({match}) => {
    console.log(match);
    return (
        <div className="home">
            <h1>Tasty Recipes</h1>
            <img className="home-image" src="https://purepng.com/public/uploads/large/purepng.com-tomato-saladsalad-9415246422565bqud.png" alt="Salad" class="center"/>
            <h5><em>These meals will make your weeknights way simpler. (And tastier!)</em></h5>
        </div>
    );
}

export default Home;