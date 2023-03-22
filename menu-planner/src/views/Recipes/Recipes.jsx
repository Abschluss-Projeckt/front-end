import React, { useState, useContext } from "react";

import { RecipeContext } from "../../contexts/Context";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

import "./Recipes.scss";

// const recipes = [
//   {
//     src: "/imgs/salad.jpg",
//     title: "Green Salad",
//     desc: "These tasty and easy green salad recipes are so versatile! They pair with just about any main dish, from pasta to pizza to salmon to chili.",
//     authorImg: "/usersimgs/chef1.jpg",
//   },
//   {
//     src: "/imgs/cheese-burger.jpg",
//     title: "Cheese Burger",
//     desc: "The All-American Cheeseburger has certain non-negotiable elements: American cheese is one of them.",
//     authorImg: "/usersimgs/chef2.jpg",
//   },
//   {
//     src: "/imgs/Baba ghanoush .jpg",
//     title: "Baba ghanoush",
//     desc: "This baba ganoush recipe proves how easy it is to make this beloved Middle Eastern dip at home.",
//     authorImg: "/usersimgs/chef3.jpg",
//   },
//   {
//     src: "/imgs/close-up-turkish-baklava.jpg",
//     title: "Baklava",
//     desc: "Baklava is a delicious Turkish dessert made up of layers of crispy phyllo dough, honey and nuts that's sooo easy to make.",
//     authorImg: "/usersimgs/chef4.jpg",
//   },
//   {
//     src: "/imgs/grilled-chicken-breasts.jpg",
//     title: "Grilled chicken breasts",
//     desc: "Say goodbye to dry, bland grilled chicken breasts. This recipe guarantees juicy, flavorful chicken every time.",
//     authorImg: "/usersimgs/chef5.jpg",
//   },
//   {
//     src: "/imgs/imam-bayildi-traditional-turkish-food.jpg",
//     title: "Imam bayildi",
//     desc: "There are many recipes for the iconic Turkish eggplant dish, Imam Bayildi. Most call for much more olive oil than this recipe does. There’s quite a bit in this one, but it’s a much lighter dish than the classic.",
//     authorImg: "/usersimgs/chef6.jpg",
//   },
//   {
//     src: "/imgs/pide-lahmajun.jpg",
//     title: "Pide lahmajun",
//     desc: "Turkish lahmacun is made by rolling a ball of sturdy semolina dough into a thin disc, which is spread with a thin layer of ground meat and baked briefly in a super-hot, preferably wood-fired oven.",
//     authorImg: "/usersimgs/chef7.jpg",
//   },
//   {
//     src: "/imgs/spaghetti.jpg",
//     title: "Spaghetti Bolognese",
//     desc: "This fast-track recipe for Quick & Easy Spaghetti Bolognese makes a meat sauce that’s bursting with Italian flavor the perfect Italian meal everyone will love!",
//     authorImg: "/usersimgs/chef3.jpg",
//   },
//   {
//     src: "/imgs/turkish-arabic-traditional.jpg",
//     title: "Kebab",
//     desc: "To realise these kebabs, it is preferable to choose pieces of striploin. Dice them up and leave them to marinade for several hours before grilling them.",
//     authorImg: "/usersimgs/chef7.jpg",
//   },
// ];

function Recipes() {
  const { recipes } = useContext(RecipeContext);
  const [searchTerm, setSearchTerm] = useState("");

  const searchRecipes = (searchTerm) => {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredRecipes;
  };

  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  const filteredRecipes = searchRecipes(searchTerm);

  return (
    <div>
      <h1>Recipes</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="recipes-Con">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
