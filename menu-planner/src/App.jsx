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

function App() {
  return (
    <Router>
      <Context>
        <Header />
        <div className="container main">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
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
