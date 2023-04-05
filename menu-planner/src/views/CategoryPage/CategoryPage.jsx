import React, { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { RecipeContext } from "../../contexts/Context";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

import "./CategoryPage.scss";

function CategoryPage() {
  const { recipes } = useContext(RecipeContext);

  const { categoryId } = useParams();
  const navigate = useNavigate();

  const mappedRecipes = recipes.map((recipe) => {
    return {
      ...recipe,
      category: Object.values(recipe.category),
    };
  });

  if (categoryId.includes("%20")) {
    categoryId.replace("%20", " ");
  }

  const arr = categoryId.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const categoryID = arr.join(" ");

  const filteredRecipes = mappedRecipes.filter((recipe) =>
    recipe.category.includes(categoryID)
  );

  console.log(filteredRecipes);

  return (
    <div className="recipes">
      <h1 className="title">{categoryID}</h1>

      <button onClick={() => navigate(-1)} className="toBack">
        Back
      </button>
      <div
        className={filteredRecipes.length === 1 ? "recipe_con" : "recipes-Con"}
      >
        {filteredRecipes.length === 0 ? (
          <div>
            <p>
              At the moment there aren't any {categoryID.toLowerCase()} recipes.
            </p>
          </div>
        ) : (
          filteredRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
