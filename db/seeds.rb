

# recipe data
 recipe1 = Recipe.create(title: "Pizza", description: "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot ", ingredients: "2 ½ cups warm water · 1 teaspoon sugar · 2 teaspoons active dry yeast · 7 cups all-purpose flour, plus more for dusting ", image_url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", user_id: 2)  
 recipe2 = Recipe.create(title: "Milkshake", description: "A milkshake (sometimes simply called a shake) is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.", ingredients:"1x 2x 3x ; ⅔ cup milk ; 2 cups ice cream use chocolate ice cream for a chocolate shake ; 3 tablespoons chocolate syrup", image_url: "https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=649&q=80", user_id: 3)  
 recipe3 = Recipe.create(title: "vegetable rice ", description: "This vegetable fried rice is a quick dish that combines nutty brown rice with bell peppers, peas, and onions seasoned with sesame oil and soy sauce.", ingredients: "cups water ; cups quick-cooking brown rice ; tablespoons peanut oil ; small yellow onion, chopped ; small green bell pepper, chopped", image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fyellow-rice&psig=AOvVaw17NbUB6lXgRaU0JpqcIWCL&ust=1665583819776000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIjryJCt2PoCFQAAAAAdAAAAABAE", user_id: 2)  
 recipe4 = Recipe.create(title: "tuna steak", description: " In a large non-reactive dish, mix together the orange juice, soy sauce, olive oil, lemon juice, parsley, garlic, oregano, and pepper. Place the tuna steaks in the marinade and turn to coat. Cover, and refrigerate for at least 30 minutes.Preheat grill for high heat.Lightly oil grill grate. Cook the tuna steaks for 5 to 6 minutes, then turn and baste with the marinade. Cook for an additional 5 minutes, or to desired doneness. Discard any remaining marinade. ", ingredients: "¼ cup orange juice · ¼ cup soy sauce · 2 tablespoons olive oil · 1 tablespoon lemon juice · 2 tablespoons chopped fresh parsley · 1 clove garlic, minced", image_url: "https://www.bowlofdelicious.com/wp-content/uploads/2015/11/Ahi-Tuna-Steaks-1.jpg", user_id: 2)  
 recipe5 = Recipe.create(title: "sandwhich", description: "    Slather your condiments on the bottom slice of bread.Add the densest vegetables, like pickles, followed by the lettuce and then the tomato.Add the cheese.Add the meat.Spread another layer of condiments on the top slice of bread.",ingredients: "1 white onion (sliced) ½ cucumber (sliced ½ cup of oats1 tomato (sliced)Lettuce leaves 1 tablespoon of mayonnaise Salad oil SaltPepper", image_url: "https://hapakenya.com/wp-content/uploads/2020/11/Sandwich.jpg", user_id: 4)   
 recipe6 = Recipe.create(title: "hamburger", description: "In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.Step 2 Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burgers, turning once, until browned on both sides and no longer pink inside (cut to test), 7 to 8 minutes total. Remove from grill.", ingredients: "1 pound ground lean (7% fat) beef1 large egg ½ cup minced onion ¼ cup fine dried bread crumbs 1 tablespoon Worcestershire 1 or 2 cloves garlic, peeled and minced About 1/2 teaspoon salt About 1/4 teaspoon pepper ",  image_url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F06%2F22%2Fnugget-burger-su-1076692-x.jpg&w=272&h=272&c=sc&poi=face&q=60", user_id: 3)   
 recipe7 = Recipe.create(title: "Shrimo", description: "Cooking shrimp in a stir-fry is a natural fit for these juicy little crustaceans. Sautéed quickly over high heat, with a flavorful sauce and some veggies, this recipe is all but guaranteed to produce perfect shrimp every time.", ingredients: "½ cucumber (sliced ½ cup of oats1 tomato (sliced)Lettuce leaves 1", image_url: "https://images.themodernproper.com/billowy-turkey/production/posts/Shrimp-Fajitas-12.jpg?w=667&auto=compress%2Cformat&fit=crop&dm=1612803666&s=d42cc5a92e1bd7816c780404e248414a", user_id: 1)   
       

    #USER DATA
 user1 = User.create(name: "Austin", email: "austin@test.com", password_digest: "password1", user_type: 'admin')
 user2 = User.create(name: "John", email: "john@test.com", password_digest: "password2", user_type: 'member')
 user3 = User.create(name: "Rashid", email: "rashid@test.com", password_digest: "password3", user_type: 'member')
 user4 = User.create(name: "joe", email: "joe@test.com", password_digest: "password4", user_type: 'member')
 user5 = User.create(name: "gregory", email:"gregory@test.com", password_digest: "password5", user_type: 'member')

 # review data
Review.create!(rating: 4, textbody: 'I Tested the Most Popular Tuna Steak Recipes and Found the One You Must Make',user_id: 2, recipe_id: 3)
Review.create!(rating: 5 , textbody: 'Yes, the Viral Ice Cream Sandwich Milkshake Recipe Is That Good',user_id: 3, recipe_id: 5)
Review.create!(rating: 4.5, textbody: 'I Tried the Vegetable Rice That Everyone’s Obsessed with and It Definitely Lived Up to the Hype',user_id: 5, recipe_id: 2)
Review.create!(rating: 4.5, textbody: 'If you want to eat a generous burger and do not want to spend so much money just go to Buddies Burger and enjoy the company of its owner, who is very kind and helpful. Thanks for everything!',user_id: 5, recipe_id: 4)
Review.create!(rating: 4.5, textbody: 'I Tried the Stir-Fried Shrimp That Everyone’s Obsessed with and It Definitely Lived Up to the Hype',user_id: 3, recipe_id: 1)