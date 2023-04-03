import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

export default function Context({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const loggedInCookie = Cookies.get("logged_in");

  const getAllRecipes = () => {
    axios
      .get("/api/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get("/api/users")
      .then((res) => setAllUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllRecipes();
    getAllUsers();
  }, []);

  const getOneUser = () => {
    if (loggedInCookie) {
      axios
        .get(`/api/users/${loggedInCookie}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const logOut = () => {
    axios
      .get("/api/auth/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <RecipeContext.Provider
      value={{ loggedInCookie, recipes, user, getOneUser, logOut, allUsers }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
