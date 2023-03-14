import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

export const RecipeContext = createContext();

export default function Context({ children }) {
  const loggedInCookie = Cookies.get("logged_in");

  return <RecipeContext.Provider value={{}}>{children}</RecipeContext.Provider>;
}
