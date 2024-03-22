import React from "react";

const Button = ({ label, icon, onClick }) => {
  return (
    <button
      className="relative group flex items-center justify-center py-3 pl-8 pr-[70px] rounded-full border-primary border-[1.5px] overflow-hidden"
      onClick={onClick}
    >
      <span className="relative font-semibold text-base uppercase group-hover:text-gray-100 z-10 ">
        {label}
      </span>
      <span className="absolute top-0 right-0 h-full bg-primary w-[48px] flex items-center justify-center rounded-full text-2xl text-gray-100  z-10">
        {icon}
      </span>
      <span className="absolute right-0 top-0 w-0 h-full bg-primary group-hover:w-full transition-all duration-500 z-0"></span>
    </button>
  );
};

export default Button;
