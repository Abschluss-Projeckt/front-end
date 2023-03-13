import "./App.scss";
import Header from "././components/Header/Header";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container main">
        <Home />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
