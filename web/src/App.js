import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import Cards from "./components/Location";
import Signup from "./components/Signup";
import Drawer from "./components/Drawer";
import GarageDetails from "./components/GarageDetails";

function App() {
  return <GarageDetails />;
}

export default App;
