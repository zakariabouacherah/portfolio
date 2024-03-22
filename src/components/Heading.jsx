import React from "react";

const Heading = ({ title, subTitle, highlighted }) => {
  return (
    <div className="relative ">
      <div className="relative text-5xl uppercase font-extrabold tracking-wider z-10">
        <span> {title} </span>
        <span className="text-primary"> {highlighted} </span>
      </div>
      <div className="absolute text-gray-400 dark:text-gray-600 -bottom-2 left-[50%] translate-x-[-50%] opacity-20 text-8xl uppercase z-0 tracking-wider">
        {subTitle}
      </div>
    </div>
  );
};

export default Heading;
