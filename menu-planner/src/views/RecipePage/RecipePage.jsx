import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RecipePage.scss";

function Recipe(props) {
  return (
    <div className="recipe">
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.explanation}</p>
      <h3>Ingredients:</h3>
      <ul>
        {props?.ingredients?.map((ingredient, index) => (
          <li key={index}>
            <p>{ingredient.amount}</p>
            <p>{ingredient.measure}</p>
            <p>{ingredient.name}</p>
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {props?.description?.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ol>
    </div>
  );
}

function RecipePage() {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/recipes/${recipeId}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  }, [recipeId]);

  if (!recipe) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="recipe-page">
      <button onClick={() => navigate("/recipes")}>Back</button>
      <Recipe
        title={recipe.name}
        image={recipe.image}
        explanation={recipe.explanation}
        ingredients={recipe.ingredients}
        description={recipe.description}
      />
    </div>
  );
}

export default RecipePage;
