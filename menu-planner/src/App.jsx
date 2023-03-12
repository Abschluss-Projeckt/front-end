import "./App.scss";
import Header from "././components/Header/Header";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
