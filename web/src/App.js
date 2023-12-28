import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Signup from "./components/Signup";
import Drawer from "./components/Drawer";

function App() {
  return (
    <Router>
      <Drawer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
