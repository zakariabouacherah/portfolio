import { useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
