import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.js";
import Home from "./components/Home.js";
import Industries from "./components/Industries";
import Capture from "./components/Capture.js";
import Resources from "./components/Resources";
import Footer from "./components/footer/footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Industries" element={<Industries />} />
        <Route path="/Capture" element={<Capture />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
