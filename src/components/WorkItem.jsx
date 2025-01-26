import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { TbReportSearch } from "react-icons/tb";

const WorkItem = ({ imgPath, name, descreption, delay, projectLink }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate();
  const onClick = () => {
    navigate(projectLink);
  };
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-delay={delay}
      className="relative lg:w-[500px] h-full rounded-2xl overflow-hidden"
    >
      <div className="w-full h-[260px] relative overflow-hidden">
        <img
          src={imgPath}
          alt={name}
          className="relative w-full h-full object-cover group-hover:scale-105 transition-all duration-200 ease-linear"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#0008] to-transparent "></div>
      </div>
      <div className="p-6 bg-neutral-200 dark:bg-neutral-700 h-full">
        <div className="text-2xl font-bold mb-2 uppercase text-dark dark:text-white">
          {name}
        </div>
        <div className="text-base font-light opacity-80 mb-4">
          {descreption}
        </div>
        <div>
          {/* <a
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
          </a> */}
          {/* <Link
            className="py-2 px-4 bg-primary text-white rounded-xl hover:bg-primary1 border-[1px] border-transparent cursor-pointer"
            to={projectLink}
          >
            More details
          </Link> */}
          <Button
            icon={<TbReportSearch />}
            label={"More details"}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
