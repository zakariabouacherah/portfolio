import React from "react";

const Heading = ({ title, subTitle, highlighted }) => {
  return (
    <div className="relative ">
      <div className="relative text-4xl lg:text-6xl uppercase font-extrabold tracking-wider z-10">
        <span> {title} </span>
        <span className="text-primary"> {highlighted} </span>
      </div>
      <div className="absolute text-gray-400 dark:text-gray-600 -bottom-1 lg:-bottom-2 left-[50%] translate-x-[-50%] opacity-20 text-7xl lg:text-9xl uppercase z-0 tracking-wider">
        {subTitle}
      </div>
    </div>
  );
};

export default Heading;
