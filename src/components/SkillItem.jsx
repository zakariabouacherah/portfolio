import React from "react";
import { Circle } from "rc-progress";

const SkillItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative text-4xl text-primary">{icon}</div>
      <span className=" uppercase font-medium"> {label} </span>
    </div>
  );
};

export default SkillItem;
