import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
