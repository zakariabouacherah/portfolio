import React from "react";

const NavItem = ({ label, icon }) => {
  return (
    <div className="relative group flex flex-row items-center">
      <div className="z-10 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-700 text-2xl text-neutral-900 dark:text-neutral-100 ">
        {icon}
      </div>
      <div className="opacity-0 z-0 flex group-hover:opacity-100 h-12 pl-4 pr-12 -mr-10 transition-all duration-300 items-center justify-center absolute group-hover:right-full right-8 bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-full  ">
        {label}
      </div>
    </div>
  );
};

export default NavItem;
