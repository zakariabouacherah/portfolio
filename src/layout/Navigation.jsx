import React, { useState } from "react";
import { TbHome, TbUser, TbBriefcase, TbMailOpened } from "react-icons/tb";
import NavItem from "../components/NavItem";

const Navigation = ({ activeSection, handleButtonClick }) => {
  return (
    <div className="relative h-full w-screen lg:w-full flex justify-center items-end gap-4 lg:gap-8 lg:flex-col lg:py-12 lg:px-8">
      <div className="relative flex items-end lg:flex-col gap-6 ">
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
      {/* <div className="hidden lg:block"></div> */}
    </div>
  );
};

export default Navigation;
