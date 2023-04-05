import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { RecipeContext } from "../../contexts/Context";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./Recipes.scss";

function Recipes() {
  const { recipes } = useContext(RecipeContext);
  const [searchTerm, setSearchTerm] = useState("");

  const searchRecipes = (searchTerm) => {
    let filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredRecipes;
  };

  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  const filteredRecipes = searchRecipes(searchTerm);

  return (
    <div className="recipes">
      <SearchBar onSearch={handleSearch} />
      <h1 className="title">Recipes</h1>

      <div
        className={filteredRecipes.length === 1 ? "recipe_con" : "recipes-Con"}
      >
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
