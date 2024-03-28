import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

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
    <div className={`${darkMode && "dark"} transition-colors duration-100 `}>
      <div className=" bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
        <div className="fixed bottom-0 lg:top-0 lg:right-0 z-20">
          <Navigation
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
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
    </div>
  );
};

export default Layout;
