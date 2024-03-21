import React from "react";
import { TbMoon, TbSunHigh } from "react-icons/tb";

const Navigation = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <div className="flex items-center justify-center bg-neutral-400 w-12 h-12 rounded-full cursor-pointer">
        <button
          className="text-neutral-900 dark:text-neutral-100 text-3xl"
          onClick={toggleDarkMode}
        >
          {darkMode ? <TbSunHigh /> : <TbMoon />}
        </button>
      </div>
      <div className="dark:text-neutral-300">Nav Links</div>
    </div>
  );
};

export default Navigation;
