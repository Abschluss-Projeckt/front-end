import React, { useEffect, useContext, useState } from "react";

import { Link } from "react-router-dom";

import { RecipeContext } from "../../../contexts/Context";

import RecipeCard from "../../../components/RecipeCard/RecipeCard";

import "./UserRecipes.scss";

function UserRecipes() {
  const { recipes, user } = useContext(RecipeContext);

  const userRecipes = recipes.filter((recipe) => recipe.user?._id === user?.id);

  return (
    <>
      {userRecipes.length > 0 ? (
        <div
          className={userRecipes.length === 1 ? "recipe_con" : "recipes-Con"}
        >
          <button className="recipe_cont_create_btn">
            <Link
              className="recipe_cont_create"
              to={`/users/${user.id}/create-recipe`}
            >
              <span>+</span> Create a new recipe
            </Link>
          </button>

          {userRecipes.length > 0
            ? userRecipes.map((recipe, i) => (
                <RecipeCard key={i} recipe={recipe} />
              ))
            : ""}
        </div>
      ) : (
        <Link
          className="new_recipe_cont"
          to={`/users/${user.id}/create-recipe`}
        >
          <div className="new_recipe">
            <img src="/imgs/food-g54c50acf0_640.png" alt="food" />
            <p className="new_recipe_btn">+</p>
            <p>Create a new recipe</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default UserRecipes;
