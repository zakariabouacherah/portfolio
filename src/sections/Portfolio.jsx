import React, { useEffect } from "react";
import Heading from "../components/Heading";
import WorkItem from "../components/WorkItem";
import Tajin from "../assets/tajinetales.png";
import DataDriven from "../assets/datadriven.png";
import Oussama from "../assets/oussama.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full min-h-screen flex items-center flex-col z-10 ">
      <div
        data-aos="zoom-in-down"
        data-aos-duration="700"
        data-aos-easing="ease"
        className="w-full flex items-center justify-center py-20"
      >
        <Heading title="My" subTitle="works" highlighted="portfolio" />
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6 px-6 pb-20 md:px-20 max-w-7xl">
        <WorkItem
          imgPath={Tajin}
          name="Tajine Tales"
          repoLink={"https://github.com/zakariabouacherah/tajine-tales"}
          descreption="This is a fully operational culinary platform, TajineTales, employing React.js for the frontend and Express.js with a REST API for the backend, coupled with MongoDB integration for secure data management."
          delay={0}
        />
        <WorkItem
          imgPath={DataDriven}
          name="Data Driven"
          demoLink={"https://data-driven.onrender.com/"}
          repoLink={"https://github.com/zakariabouacherah/digital-agency"}
          descreption="DataDriven: A dynamic showcase of modernity in digital agency websites. Built using React and styled with Tailwind CSS. Witness the future of web design unfold with DataDriven's sleek, data-centric components."
          delay={300}
        />
        <WorkItem
          imgPath={Oussama}
          name="Oussama Ichid Portfolio"
          demoLink={"https://ossama-ichid.onrender.com/"}
          repoLink={"https://github.com/zakariabouacherah/oss-portfolio"}
          descreption="Oussama Ichid Portfolio: A contemporary portfolio designed for a friend, featuring a dynamic layout and modern styling with React and Tailwind CSS. This project emphasizes responsive design and user-friendly navigation, reflecting the seamless blend of functionality and aesthetics in today’s web development."
          delay={600}
        />
      </div>
    </section>
  );
};

export default Portfolio;
