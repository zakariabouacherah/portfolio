import React from "react";
import Heading from "../components/Heading";
import WorkItem from "../components/WorkItem";
import Tajin from "../assets/tajinetales.png";
import DataDriven from "../assets/datadriven.png";

const Portfolio = () => {
  return (
    <section className="w-full min-h-screen flex items-center flex-col z-10 ">
      <div className="w-full flex items-center justify-center py-20">
        <Heading title="My" subTitle="works" highlighted="portfolio" />
      </div>
      <div className="flex items-center justify-center gap-6 px-20 max-w-7xl">
        <WorkItem
          imgPath={Tajin}
          name="Tajine Tales"
          repoLink={"https://github.com/zakariabouacherah/tajine-tales"}
          descreption="This is a fully operational culinary platform, TajineTales, employing React.js for the frontend and Express.js with a REST API for the backend, coupled with MongoDB integration for secure data management."
        />
        <WorkItem
          imgPath={DataDriven}
          name="Data Driven"
          demoLink={"https://data-driven.onrender.com/"}
          repoLink={"https://github.com/zakariabouacherah/digital-agency"}
          descreption="DataDriven: A dynamic showcase of modernity in digital agency websites. Built using React and styled with Tailwind CSS. Witness the future of web design unfold with DataDriven's sleek, data-centric components."
        />
      </div>
    </section>
  );
};

export default Portfolio;
