import React from "react";
import "./RecipeCard.scss";
import { Link } from "react-router-dom";
import IntroImg from "../IntroImg/IntroImg";

function RecipeCard({ recipe }) {
  return (
    <div className="RecipeCard">
      <IntroImg Srcs={recipe.image} pt="65%" />
      <div className="RecipeCard-info">
        <img
          className="user-img"
          src={recipe.user?.image}
          alt="x"
          referrerPolicy="no-referrer"
        />
        <h3 className="RecipeCard-title">{recipe.name}</h3>
        {recipe.explanation && (
          <p className="RecipeCard-desc">{recipe?.explanation}</p>
        )}
        <button className="V-btn">
          <Link className="V-link" to={`/recipes/${recipe._id}`}>
            VIEW RECIPE
          </Link>
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
