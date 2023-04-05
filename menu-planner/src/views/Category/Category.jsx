import { useState } from "react";
import axios from "axios";
import "./Category.scss";
import { Link } from "react-router-dom";
const Category = ({ onChange }) => {
  // const [selectedCategory, setSelectedCategory] = useState({});

  // const handleSelect = (category, value) => {
  //   setSelectedCategory((prev) => ({ ...prev, [category]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.get("/api/recipes", {
  //       category: selectedCategory,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

  return (
    <div className="category_page">
      <h1 className="title">Categories</h1>
      <div className="categories">
        <div className="meal_cont">
          <h3>By Meal Option</h3>
          {category.mealType.map((mt, i) => (
            <Link
              key={i}
              className="meal_cont_link"
              to={`/categories/${mt.toLowerCase()}`}
            >
              {mt}
            </Link>
          ))}
        </div>
        <div className="meal_cont">
          <h3>By Meal Type</h3>
          {category.meal.map((m, i) => (
            <Link
              key={i}
              className="meal_cont_link"
              to={`/categories/${m.toLowerCase()}`}
            >
              {m}
            </Link>
          ))}
        </div>
        <div className="meal_cont">
          <h3>By Region</h3>
          {category.region.map((r, i) => (
            <Link
              key={i}
              className="meal_cont_link"
              to={`/categories/${r.toLowerCase()}`}
            >
              {r}
            </Link>
          ))}
        </div>
        <div className="meal_cont">
          <h3>By Nutrition</h3>
          {category.nutrition.map((n, i) => (
            <Link
              key={i}
              className="meal_cont_link"
              to={`/categories/${n.toLowerCase()}`}
            >
              {n}
            </Link>
          ))}
        </div>
      </div>
    </div>
    // <form className=".form" onSubmit={handleSubmit}>
    //   <div>
    //     <label>Meal Type</label>
    //     <select
    //       value={selectedCategory.mealType}
    //       onChange={(e) => handleSelect("mealType", e.target.value)}
    //     >
    //       <option value="">Select Meal Type</option>
    //       <option value="Appetizer">Appetizer</option>
    //       <option value="Main Course">Main Course</option>
    //       <option value="Breakfast">Breakfast</option>
    //       <option value="Salad">Salad</option>
    //       <option value="Dessert">Dessert</option>
    //       <option value="Snacks">Snacks</option>
    //       <option value="Drinks">Drinks</option>
    //     </select>
    //   </div>
    //   <div>
    //     <label>Meal</label>
    //     <select
    //       value={selectedCategory.meal}
    //       onChange={(e) => handleSelect("meal", e.target.value)}
    //     >
    //       <option value="">Select Meal</option>
    //       <option value="Meat Dishes">Meat Dishes</option>
    //       <option value="Fish Dishes">Fish Dishes</option>
    //       <option value="Pizza & Pasta">Pizza &amp; Pasta</option>
    //       <option value="Baking">Baking</option>
    //       <option value="Soups & Stews">Soups &amp; Stews</option>
    //       <option value="Salad">Salad</option>
    //       <option value="Sides">Sides</option>
    //       <option value="Dessert">Dessert</option>
    //       <option value="Casserole">Casserole</option>
    //       <option value="Snacks">Snacks</option>
    //     </select>
    //   </div>
    //   <div>
    //     <label>Region</label>
    //     <select
    //       value={selectedCategory.region}
    //       onChange={(e) => handleSelect("region", e.target.value)}
    //     >
    //       <option value="">Select Region</option>
    //       <option value="Asian">Asian</option>
    //       <option value="Chinese">Chinese</option>
    //       <option value="German">German</option>
    //       <option value="British">British</option>
    //       <option value="French">French</option>
    //       <option value="Arabic">Arabic</option>
    //       <option value="Greek">Greek</option>
    //       <option value="Indian">Indian</option>
    //       <option value="Italian">Italian</option>
    //       <option value="Japanese">Japanese</option>
    //       <option value="Mexican">Mexican</option>
    //       <option value="European">European</option>
    //       <option value="Spanish">Spanish</option>
    //       <option value="Turkish">Turkish</option>
    //       <option value="Oriental">Oriental</option>
    //       <option value="American">American</option>
    //     </select>
    //   </div>
    //   <div>
    //     <label>Nutrition</label>
    //     <select
    //       value={selectedCategory.nutrition}
    //       onChange={(e) => handleSelect("nutrition", e.target.value)}
    //     >
    //       <option value="">Select Nutrition</option>
    //       <option value="Low Carb">Low Carb</option>
    //       <option value="High Protein">High Protein</option>
    //       <option value="Low Fat">Low Fat</option>
    //       <option value="Vegetarian">Vegetarian</option>
    //       <option value="Vegan">Vegan</option>
    //       <option value="Gluten-free">Gluten-free</option>
    //     </select>
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default Category;
