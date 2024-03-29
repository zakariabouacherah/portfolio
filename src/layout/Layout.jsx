import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
import { TbMoon, TbSunHigh } from "react-icons/tb";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleButtonClick = (section) => {
    window.localStorage.setItem("section", section);
    setActiveSection(section);
  };
  console.log(activeSection);

  return (
    <div
      className={`${
        darkMode && "dark"
      } transition-colors duration-100 relative `}
    >
      <div className=" relative bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
        <div className="fixed bottom-0 lg:top-0 lg:right-0 py-2 bg-neutral-200 dark:bg-neutral-800 lg:bg-transparent lg:dark:bg-transparent z-20">
          <Navigation
            activeSection={activeSection}
            handleButtonClick={handleButtonClick}
          />
        </div>
        {activeSection === "hero" && (
          <Hero onClick={() => setActiveSection("about")} />
        )}
        {activeSection === "about" && <About />}
        {activeSection === "portfolio" && <Portfolio />}
        {activeSection === "contact" && <Contact />}
      </div>
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer fixed right-8 top-8 z-30 shadow-md ${
          darkMode ? "bg-neutral-600" : "bg-neutral-300"
        }`}
        onClick={toggleDarkMode}
      >
        <button className="text-neutral-900 dark:text-neutral-100 text-3xl">
          {darkMode ? <TbSunHigh /> : <TbMoon />}
        </button>
      </div>
    </div>
  );
};

export default Layout;
