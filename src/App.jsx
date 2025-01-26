import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LuxeElectro from "./sections/projects/luxe-electro";
import NotFound from "./layout/NotFound";
import Mode from "./components/Mode";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={`${
        darkMode && "dark"
      } transition-colors duration-100 relative `}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/projects/luxe-electro" element={<LuxeElectro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Mode darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
