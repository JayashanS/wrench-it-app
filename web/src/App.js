import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Signup from "./components/Signup";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Carousel />
      <Cards />

      <Signup />
    </div>
  );
}

export default App;
