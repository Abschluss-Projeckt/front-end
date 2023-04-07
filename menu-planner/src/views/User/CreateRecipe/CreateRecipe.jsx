import React, { useState, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { RecipeContext } from "../../../contexts/Context";

import "./CreateRecipe.scss";

function CreateRecipe() {
  const { loggedInCookie, user, getAllRecipes } = useContext(RecipeContext);

  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    explanation: "",
    portion: 0,
    ingredients: [{ name: "", amount: 0, measure: "" }],
    description: [""],
    category: {},
    preparationTime: 0,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const unit = [
    "cup",
    "g",
    "fl oz",
    "ml",
    "oz",
    "tsp",
    "tbsp",
    "bag",
    "bar",
    "bulb",
    "bundle",
    "capsule",
    "cl",
    "clove",
    "cob",
    "dash",
    "drop",
    "gallon",
    "head",
    "kg",
    "l",
    "lb",
    "leaf",
    "loaf",
    "meter",
    "package",
    "pinch",
    "pint",
    "quart",
    "scoop",
    "sheet",
    "slice",
    "sprig",
    "stalk",
    "stick",
    "strip",
    "tea bag",
  ];

  const category = {
    mealType: [
      "Appetizer",
      "Main Course",
      "Breakfast",
      "Salad",
      "Dessert",
      "Snacks",
      "Drinks",
    ],
    meal: [
      "Meat Dishes",
      "Fish Dishes",
      "Pizza & Pasta",
      "Baking",
      "Soups & Stews",
      "Salad",
      "Sides",
      "Dessert",
      "Casserole",
      "Snacks",
    ],
    region: [
      "Asian",
      "Chinese",
      "German",
      "British",
      "French",
      "Arabic",
      "Greek",
      "Indian",
      "Italian",
      "Japanese",
      "Mexican",
      "European",
      "Spanish",
      "Turkish",
      "Oriental",
      "American",
    ],
    nutrition: [
      "Vegan",
      "Vegetarian",
      "Sugar Free",
      "Lactose Free",
      "Gluten Free",
      "Non-alcoholic",
    ],
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    if (value.match(/^\d+$/)) {
      value = +value;
    }

    setRecipe({ ...recipe, [name]: value });
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setRecipe({ ...recipe, image: event.target.files[0].name });
  };

  const handleCategoryChange = (event) => {
    const { name, value } = event.target;
    const category = { ...recipe.category };
    category[name] = value;
    setRecipe({ ...recipe, category });
  };

  const handleIngredientChange = (event, index) => {
    let { name, value } = event.target;
    const ingredients = [...recipe.ingredients];
    if (value.match(/^\d+$/)) {
      value = +value;
    }

    ingredients[index][name] = value;

    setRecipe({ ...recipe, ingredients });
  };

  const handleStepChange = (event, index) => {
    const { value } = event.target;
    const description = [...recipe.description];
    description[index] = value;
    setRecipe({ ...recipe, description });
  };

  const handleAddIngredient = () => {
    const ingredients = [
      ...recipe.ingredients,
      { name: "", amount: "", measure: "" },
    ];
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddStep = () => {
    const description = [...recipe.description, ""];
    setRecipe({ ...recipe, description });
  };

  // console.log(recipe);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loggedInCookie) {
      let recipeToPost = {
        name: recipe.name,
        image: `/imgs/${selectedFile.name}`,
        explanation: recipe.explanation,
        portion: recipe.portion,
        ingredients: recipe.ingredients,
        description: recipe.description,
        category: recipe.category,
        preparationTime: recipe.preparationTime,
        comments: [],
        recipeRanking: [],
        user: user.id,
      };

      const formData = new FormData();
      formData.append("image", selectedFile);

      axios
        .post("/api/upload-image", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      axios
        .post(`/api/recipes`, recipeToPost)
        .then((res) => {
          console.log(res);
          getAllRecipes();
          navigate(`/users/${user.id}/recipes`);
        })
        .catch((err) => console.log(err));
    } else {
      alert(`You should first sign up!`);
    }

    setRecipe({
      name: "",
      image: "",
      explanation: "",
      portion: 0,
      ingredients: [{ name: "", amount: 0, measure: "" }],
      description: [""],
      category: {},
      preparationTime: 0,
    });
  };
  return (
    <div className="create_recipe_cont">
      <h1 className="title">Create Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="create_basics">
          <h2>Basic Informations</h2>
          <div>
            <label htmlFor="name">Name of your recipe: </label>

            <input
              type="text"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="image">Photo of your recipe: </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileSelect}
              className="image_input"
            />
          </div>
          <div>
            <label htmlFor="explanation">
              Tell us the story behind your recipe:{" "}
            </label>
            <textarea
              id="explanation"
              name="explanation"
              value={recipe.explanation}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="create_categories">
          <h2>Categories</h2>
          <div className="category_option">
            <label htmlFor="mealType">Type of Meal: </label>
            <select
              id="mealType"
              name="mealType"
              value={recipe.category?.mealType}
              onChange={(event) => handleCategoryChange(event)}
            >
              <option value="">Please choose meal type</option>
              {category.mealType.map((mt, i) => (
                <option key={i} value={mt}>
                  {mt}
                </option>
              ))}
            </select>
          </div>

          <div className="category_option">
            <label htmlFor="meal">Meal Option: </label>
            <select
              id="meal"
              name="meal"
              value={recipe.category?.meal}
              onChange={(event) => handleCategoryChange(event)}
            >
              <option value="">Please choose meal option</option>
              {category.meal.map((m, i) => (
                <option key={i} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="category_option">
            <label htmlFor="region">Region: </label>
            <select
              id="region"
              name="region"
              value={recipe.category?.region}
              onChange={(event) => handleCategoryChange(event)}
            >
              Region:
              <option value="">Please choose region</option>
              {category.region.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="category_option">
            <label htmlFor="nutrition">Nutrition: </label>
            <select
              id="nutrition"
              name="nutrition"
              value={recipe.category?.nutrition}
              onChange={(event) => handleCategoryChange(event)}
            >
              Nutrition:
              <option value="">Please choose nutrition</option>
              {category.nutrition.map((n, i) => (
                <option key={i} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div className="serving">
            <div>
              <label htmlFor="servings">
                <h3>Servings</h3>
              </label>
              <input
                className="serving_input"
                type="number"
                id="servings"
                name="portion"
                value={recipe.portion}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="preparationTime">
                <h3>Preparation time</h3>
              </label>
              <input
                className="serving_input"
                type="number"
                id="preparationTime"
                name="preparationTime"
                value={recipe.preparationTime}
                onChange={handleInputChange}
              />
              <span> min.</span>
            </div>
          </div>
        </div>
        <div className="create_ingrd">
          <h2>Ingredients</h2>
          {recipe.ingredients?.map((ingredient, index) => (
            <div key={index} className="ingrd_section">
              <div>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  id="name"
                  className="first_child"
                  type="text"
                  name="name"
                  value={ingredient.name}
                  onChange={(event) => handleIngredientChange(event, index)}
                />
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <br />
                <input
                  id="amount"
                  type="number"
                  name="amount"
                  value={ingredient.quantity}
                  onChange={(event) => handleIngredientChange(event, index)}
                />
              </div>
              <div>
                <label htmlFor="unit">Unit</label>
                <br />
                <select
                  id="unit"
                  type=""
                  name="measure"
                  value={ingredient.measure}
                  onChange={(event) => handleIngredientChange(event, index)}
                >
                  Unit:
                  <option value="">Please choose a unit</option>
                  {unit.map((u, i) => (
                    <option key={i} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <button
            className="create_btn"
            type="button"
            onClick={handleAddIngredient}
          >
            Add Ingredient
          </button>
        </div>
        <div className="create_steps">
          <h2>Steps</h2>
          {recipe.description.map((step, index) => (
            <div key={index}>
              <label htmlFor={`step${index + 1}`}>Step {index + 1}</label>
              <textarea
                id={`step${index + 1}`}
                value={step}
                onChange={(event) => handleStepChange(event, index)}
              />
            </div>
          ))}
          <button className="create_btn" type="button" onClick={handleAddStep}>
            Add Steps
          </button>
        </div>
        <div>
          <button className="create_btn last_btn" type="submit">
            Post the Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
