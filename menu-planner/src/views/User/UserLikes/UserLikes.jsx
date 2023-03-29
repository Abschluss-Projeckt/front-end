import React, { useEffect, useContext, useState } from "react";

import { RecipeContext } from "../../../contexts/Context";

import RecipeCard from "../../../components/RecipeCard/RecipeCard";

function UserLikes() {
  const { recipes, user } = useContext(RecipeContext);

  const userLikes = recipes.filter((recipe) =>
    user.likedRecipes.includes(recipe._id)
  );

  return (
    <div className={userLikes.length === 1 ? "recipe_con" : "recipes-Con"}>
      {userLikes.length > 0
        ? userLikes.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)
        : ""}
    </div>
  );
}

export default UserLikes;
