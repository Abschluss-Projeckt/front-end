import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { RecipeContext } from "../../contexts/Context";

import "./RecipePage.scss";

function RecipePage() {
  const { loggedInCookie } = useContext(RecipeContext);

  const [recipe, setRecipe] = useState({});

  const [portion, setPortion] = useState(0);
  const [amount, setAmount] = useState(1);

  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/recipes/${recipeId}`)
      .then((res) => {
        setRecipe(res.data);
        setPortion(res.data?.portion);
      })
      .catch((err) => console.log(err));
  }, [recipeId]);

  if (!recipe) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  const handleMinus = () => {
    portion > 0 ? setPortion(portion - 1) : setPortion(0);
  };
  const handlePlus = () => {
    setPortion(portion + 1);
  };

  useEffect(() => {
    setAmount(portion / recipe.portion);
  }, [portion]);

  const total = recipe.recipeRanking?.reduce((total, num) => total + num, 0);

  const rating = Math.round(total / recipe.recipeRanking?.length);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating ? "★" : "☆";
    stars.push(
      <span key={i} onClick={() => rateRecipe(i)}>
        {filled}
      </span>
    );
  }

  const rateRecipe = (rating) => {
    console.log(rating);
    if (loggedInCookie) {
      const newValue = recipe.recipeRanking.push(+rating);
      console.log(recipe.recipeRanking);
      axios
        .patch(`/api/recipes/${recipeId}`, {
          ...recipe,
          recipeRanking: recipe.recipeRanking,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="recipe-page">
      <button onClick={() => navigate("/recipes")}>Back</button>
      <div className="recipe">
        <div className="img">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <section>
          <h2>{recipe.name}</h2>
          <div className="ranking">{stars}</div>
          <p>{recipe.explanation}</p>
          <h3>Preparation Time:</h3>
          <p>{recipe.preparationTime} min</p>

          <h3>Ingredients:</h3>

          <div className="portion">
            <p onClick={handleMinus} className="minus">
              -
            </p>
            <p>{portion}</p>
            <p onClick={handlePlus} className="plus">
              +
            </p>
            <p className="portion_title">
              {recipe.portion > 1 ? "Portionen" : "Portion"}
            </p>
          </div>

          <ul>
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>
                <div className="amount-M">
                  <p>
                    {amount * ingredient.amount} {ingredient.measure}
                  </p>
                </div>
                <p>{ingredient.name}</p>
              </li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            {recipe?.description?.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

export default RecipePage;
