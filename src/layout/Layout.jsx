import React, { useState } from "react";
import Navigation from "./Navigation";

const Layout = ({ childreen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=" bg-neutral-50 dark:bg-neutral-800">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {childreen}
      </div>
    </div>
  );
};

export default Layout;
