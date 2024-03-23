import React from "react";

const NavItem = ({ label, icon, isActive, onClick }) => {
  return (
    <div
      className="relative group flex flex-row items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`z-10 w-12 h-12 flex items-center justify-center rounded-full  text-2xl  group-hover:dark:bg-primary group-hover:bg-primary group-hover:text-neutral-100 duration-100 ${
          isActive
            ? "bg-primary text-neutral-100"
            : "bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
        }`}
      >
        {icon}
      </div>
      <div className="opacity-0 tracking-wider z-0 flex group-hover:opacity-100 h-12 pl-6 pr-16 -mr-10 transition-all duration-200 items-center justify-center absolute group-hover:right-full right-8 bg-primary text-neutral-100 font-semibold text-sm rounded-full uppercase ease-out ">
        {label}
      </div>
    </div>
  );
};

export default NavItem;
