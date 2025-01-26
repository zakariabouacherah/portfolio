import React, { useState } from "react";
import { TbMoon, TbSunHigh } from "react-icons/tb";

const Mode = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer fixed right-8 top-8 z-30 shadow-md 
        dark:bg-neutral-500 bg-neutral-300
      `}
      onClick={toggleDarkMode}
    >
      <button className={"text-neutral-900 dark:text-neutral-100 text-3xl"}>
        {darkMode ? <TbSunHigh /> : <TbMoon />}
      </button>
    </div>
  );
};

export default Mode;
