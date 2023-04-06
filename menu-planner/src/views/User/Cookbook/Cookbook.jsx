import React, { useEffect, useContext, useState } from "react";

import { RecipeContext } from "../../../contexts/Context";

import FilledSaveBtn from "@mui/icons-material/TurnedIn";
import { Link } from "react-router-dom";

import RecipeCard from "../../../components/RecipeCard/RecipeCard";

function Cookbook() {
  const { recipes, user } = useContext(RecipeContext);

  const cookbook = recipes.filter((recipe) =>
    user.savedRecipes.includes(recipe._id)
  );

  return cookbook.length === 0 ? (
    <div className="redirect_to_like">
      <h3>Looks like you haven’t saved anything yet!</h3>
      <p>
        If you want to save a recipe, simply tap on the {<FilledSaveBtn />}.
      </p>
      <button className="recipe_cont_create_btn">
        <Link to="/recipes" className="recipe_cont_create">
          Find some recipes
        </Link>
      </button>
    </div>
  ) : (
    <div className={cookbook.length === 1 ? "recipe_con" : "recipes-Con"}>
      {cookbook.length > 0
        ? cookbook.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)
        : ""}
    </div>
  );
}

export default Cookbook;
