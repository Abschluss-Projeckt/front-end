import React, { useEffect, useContext, useState } from "react";

import { RecipeContext } from "../../../contexts/Context";

import RecipeCard from "../../../components/RecipeCard/RecipeCard";

function UserRecipes() {
  const { recipes, user } = useContext(RecipeContext);

  const userRecipes = recipes.filter((recipe) => recipe.user?._id === user?.id);

  console.log(userRecipes.length);

  return (
    <div className={userRecipes.length === 1 ? "recipe_con" : "recipes-Con"}>
      {userRecipes.length > 0
        ? userRecipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)
        : ""}
    </div>
  );
}

export default UserRecipes;
