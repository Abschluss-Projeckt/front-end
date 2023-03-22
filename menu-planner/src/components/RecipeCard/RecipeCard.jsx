import React from "react";
import "./RecipeCard.scss";
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
        {/* <p className="RecipeCard-desc">{recipe.desc}</p> */}
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
