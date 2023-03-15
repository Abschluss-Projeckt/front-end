import React from "react";
import "./RecipeCard.scss";
import IntroImg from "../IntroImg/IntroImg";

function RecipeCard({ recipe }) {
  return (
    <div className="RecipeCard">
      <IntroImg Srcs={recipe.src} pt="65%" />
      <div className="RecipeCard-info">
        <img className="user-img" src={recipe.authorImg} alt="x" />
        <h3 className="RecipeCard-title">{recipe.title}</h3>
        <p className="RecipeCard-desc">{recipe.desc}</p>
        <button className="V-btn">
          <a className="V-link" href="#">
            VIEW RECIPE
          </a>
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
