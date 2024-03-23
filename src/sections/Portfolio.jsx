import React from "react";
import Heading from "../components/Heading";
import WorkItem from "../components/WorkItem";
import Tajin from "../assets/tajinetales.png";
import DataDriven from "../assets/datadriven.png";

const Portfolio = () => {
  return (
    <section className="w-full min-h-screen flex items-center flex-col ">
      <div className="w-full flex items-center justify-center py-20">
        <Heading title="My" subTitle="works" highlighted="portfolio" />
      </div>
      <div className="flex items-center justify-center gap-6 px-20 max-w-7xl">
        <WorkItem
          imgPath={Tajin}
          name="Tajine Tales"
          repoLink={"https://github.com/zakariabouacherah/tajine-tales"}
          descreption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit auctor, condimentum metus id, varius magna. Nulla erat arcu, dignissim et malesuada rutrum, sollicitudin in purus."
        />
        <WorkItem
          imgPath={DataDriven}
          name="Data Driven"
          demoLink={"https://data-driven.onrender.com/"}
          repoLink={"https://github.com/zakariabouacherah/digital-agency"}
          descreption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit auctor, condimentum metus id, varius magna. Nulla erat arcu, dignissim et malesuada rutrum, sollicitudin in purus."
        />
      </div>
    </section>
  );
};

export default Portfolio;
