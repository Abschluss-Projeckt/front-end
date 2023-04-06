import React, { useEffect, useContext, useState } from "react";

import FilledLikeBtn from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { RecipeContext } from "../../../contexts/Context";

import RecipeCard from "../../../components/RecipeCard/RecipeCard";

import "./UserLikes.scss";

function UserLikes() {
  const { recipes, user } = useContext(RecipeContext);

  const userLikes = recipes.filter((recipe) =>
    user.likedRecipes.includes(recipe._id)
  );

  return userLikes.length === 0 ? (
    <div className="redirect_to_like">
      <h3>Looks like you haven’t liked anything yet!</h3>
      <p>If you love a recipe, simply tap on the heart. {<FilledLikeBtn />}</p>
      <button className="recipe_cont_create_btn">
        <Link to="/recipes" className="recipe_cont_create">
          Find some recipes
        </Link>
      </button>
    </div>
  ) : (
    <div className={userLikes.length === 1 ? "recipe_con" : "recipes-Con"}>
      {userLikes.length > 0
        ? userLikes.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)
        : ""}
    </div>
  );
}

export default UserLikes;
