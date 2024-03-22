import React from "react";
import { Circle } from "rc-progress";

const SkillItem = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <Circle
          percent={number}
          strokeWidth={6}
          trailWidth={6}
          strokeColor="#ffb331"
          trailColor="#78787874"
          className="w-28 relative"
        />
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl font-semibold">
          {number}%
        </span>
      </div>
      <span className=" uppercase font-medium"> {label} </span>
    </div>
  );
};

export default SkillItem;
