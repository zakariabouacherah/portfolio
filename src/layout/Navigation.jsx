import React from "react";
import {
  TbMoon,
  TbSunHigh,
  TbHome,
  TbUser,
  TbBriefcase,
  TbMailOpened,
} from "react-icons/tb";
import NavItem from "../components/NavItem";

const Navigation = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className=" h-screen flex justify-between items-end gap-8 flex-col py-12 px-8">
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
      <div className="flex items-end flex-col gap-4 ">
        <NavItem label={"Home"} icon={<TbHome />} />
        <NavItem label={"About"} icon={<TbUser />} />
        <NavItem label={"Portfolio"} icon={<TbBriefcase />} />
        <NavItem label={"Contact"} icon={<TbMailOpened />} />
      </div>
      <div></div>
    </div>
  );
};

export default Navigation;
