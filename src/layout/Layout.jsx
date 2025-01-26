import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
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
    </div>
  );
};

export default Layout;
