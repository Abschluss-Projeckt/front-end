import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const RecipeContext = createContext();

export default function Context({ children }) {
  const [recipes, setRecipes] = useState([]);
  const loggedInCookie = Cookies.get("logged_in");

  useEffect(() => {
    axios
      .get("/api/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(recipes);

  return (
    <RecipeContext.Provider value={{ loggedInCookie, recipes }}>
      {children}
    </RecipeContext.Provider>
  );
}
