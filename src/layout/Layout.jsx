import React, { useState } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"} `}>
      <div className=" bg-neutral-200 dark:bg-neutral-800">
        <div className="absolute top-0 right-0">
          <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
