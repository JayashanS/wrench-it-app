import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Carousel />
      <Cards />
    </div>
  );
}

export default App;
