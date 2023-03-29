import { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "././components/Header/Header";
import Home from "./views/Home/Home";
import Recipes from "./views/Recipes/Recipes";
import Settings from "./views/Settings/Settings";
import Footer from "./components/Footer/Footer";
import Register from "./views/Register/Register";
import Context from "./contexts/Context";
import Login from "./views/Login/Login";
import RecipePage from "./views/RecipePage/RecipePage";
import User from "./views/User/User";

function App() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <Router>
      <Context>
        <Header openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <div className="container main" onClick={() => setOpenDropdown(false)}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/recipes/:recipeId" element={<RecipePage />} />
            <Route path="/users/:userId" element={<User />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </Context>
    </Router>
  );
}

export default App;
