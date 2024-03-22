import React from "react";

const StateItem = ({ number, label }) => {
  return (
    <div className="border-gray-200 dark:border-gray-700 border-[1px] p-6 ">
      <div className="flex text-primary">
        <span className="text-5xl font-bold">{number}</span>
        <span className="text-2xl font-semibold">+</span>
      </div>
      <div className="mt-4 flex items-start  gap-2 w-[70%] ">
        <div className="w-8 h-[1px] mt-3 bg-neutral-500 "></div>
        <div className="2xl uppercase font-semibold"> {label} </div>
      </div>
    </div>
  );
};

export default StateItem;
