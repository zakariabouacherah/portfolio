import React from "react";

const WorkItem = ({ imgPath, name, descreption, demoLink, repoLink }) => {
  return (
    <div className="relative group w-[500px] rounded-2xl overflow-hidden">
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={imgPath}
          alt={name}
          className="relative w-full h-full object-cover group-hover:scale-105 transition-all duration-100 ease-in"
        />
      </div>
      <div className="p-6 bg-neutral-200 dark:bg-neutral-700">
        <div className="text-2xl font-bold mb-2 uppercase text-dark dark:text-white">
          {name}
        </div>
        <div className="text-base font-light opacity-80 mb-4">
          {descreption}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={demoLink}
            target="_blank"
            className="py-2 px-4 bg-primary text-white rounded-xl hover:bg-primary1 border-[1px] border-transparent cursor-pointer"
          >
            Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            className="py-2 px-4 border-primary border-[1px] rounded-xl hover:bg-primary hover:text-white"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
