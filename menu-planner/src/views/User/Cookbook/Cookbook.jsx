import React, { useEffect, useContext, useState } from "react";

import { RecipeContext } from "../../../contexts/Context";

import RecipeCard from "../../../components/RecipeCard/RecipeCard";

function Cookbook() {
  const { recipes, user } = useContext(RecipeContext);

  const cookbook = recipes.filter((recipe) =>
    user.savedRecipes.includes(recipe._id)
  );

  return (
    <div className={cookbook.length === 1 ? "recipe_con" : "recipes-Con"}>
      {cookbook.length > 0
        ? cookbook.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)
        : ""}
    </div>
  );
}

export default Cookbook;
