import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {props.description.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    async function fetchRecipe() {
      const response = await axios.get(`/api/recipes/${recipeId}`);
      setRecipe(response.data);
    }

    fetchRecipe();
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
      <button onClick={() => props.history.goBack()}>Back</button>
      <Recipe
        title={recipe.title}
        image={recipe.image}
        description={recipe.explanation}
        ingredients={recipe.ingredients}
        instructions={recipe.description}
      />
    </div>
  );
}

export default RecipePage;
