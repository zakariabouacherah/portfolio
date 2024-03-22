import React, { useState } from "react";
import {
  TbMoon,
  TbSunHigh,
  TbHome,
  TbUser,
  TbBriefcase,
  TbMailOpened,
} from "react-icons/tb";
import NavItem from "../components/NavItem";

const Navigation = ({
  darkMode,
  toggleDarkMode,
  activeSection,
  handleButtonClick,
}) => {
  return (
    <div className=" h-full lg:h-screen flex justify-between items-end gap-4 lg:gap-8 lg:flex-col lg:py-12 lg:px-8">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer ${
          darkMode ? "bg-neutral-700" : "bg-neutral-300"
        }`}
        onClick={toggleDarkMode}
      >
        <button className="text-neutral-900 dark:text-neutral-100 text-3xl">
          {darkMode ? <TbSunHigh /> : <TbMoon />}
        </button>
      </div>
      <div className="flex items-end lg:flex-col gap-4 ">
        <NavItem
          label={"Home"}
          icon={<TbHome />}
          isActive={activeSection === "hero"}
          onClick={() => handleButtonClick("hero")}
        />
        <NavItem
          label={"About"}
          icon={<TbUser />}
          isActive={activeSection === "about"}
          onClick={() => handleButtonClick("about")}
        />
        <NavItem
          label={"Portfolio"}
          icon={<TbBriefcase />}
          isActive={activeSection === "portfolio"}
          onClick={() => handleButtonClick("portfolio")}
        />
        <NavItem
          label={"Contact"}
          icon={<TbMailOpened />}
          isActive={activeSection === "contact"}
          onClick={() => handleButtonClick("contact")}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Navigation;
