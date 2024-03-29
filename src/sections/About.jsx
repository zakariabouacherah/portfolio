import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { TbDownload } from "react-icons/tb";
import StateItem from "../components/StateItem";
import SkillItem from "../components/SkillItem";
import CV from "../assets/BOUACHERAH's RESUME.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full min-h-screen z-10 ">
      <div
        data-aos="zoom-in-down"
        data-aos-duration="700"
        data-aos-easing="ease"
        className="w-full flex items-center justify-center py-20"
      >
        <Heading title="About" subTitle="resume" highlighted="me" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease"
        className="flex items-center justify-center px-6 lg:px-20"
      >
        <div className="lg:w-[50%] flex justify-center items-center flex-col gap-8 ">
          <div className="font-semibold text-2xl tracking-wide">
            PERSONAL INFOS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-4">
            <div className="font-light">
              First Name : <span className="font-semibold"> Zakaria </span>
            </div>
            <div className="font-light">
              Last Name : <span className="font-semibold"> Bouacherah </span>
            </div>
            <div className="font-light">
              Age : <span className="font-semibold"> 24 Years </span>
            </div>
            <div className="font-light">
              Nationality : <span className="font-semibold"> Moroccan </span>
            </div>
            <div className="font-light">
              Freelance :
              <span className="font-semibold text-green-500"> Available </span>
            </div>
            <div className="font-light">
              Address :
              <span className="font-semibold">
                {" "}
                Morocco, Agadir Ait Melloul
              </span>
            </div>
            <div className="font-light">
              Phone :<span className="font-semibold"> +212 697 384 256</span>
            </div>
            <div className="font-light">
              Email :
              <span className="font-semibold"> zakabouach111@gmail.com</span>
            </div>
            <div className="font-light">
              Langages :
              <span className="font-semibold"> English, French, Arabic</span>
            </div>
          </div>
          <div>
            {/* <Button
              label="download cv"
              icon={<TbDownload />}
              onClick={() => {}}
            /> */}
            <a
              href={CV}
              download
              className="relative group flex items-center justify-center py-3 pl-8 pr-[70px] rounded-full border-primary border-[1.5px] overflow-hidden"
            >
              <span className="relative font-semibold text-base uppercase group-hover:text-gray-100 z-10 ">
                download cv
              </span>
              <span className="absolute top-0 right-0 h-full bg-primary w-[48px] flex items-center justify-center rounded-full text-2xl text-gray-100  z-10">
                <TbDownload />
              </span>
              <span className="absolute right-0 top-0 w-0 h-full bg-primary group-hover:w-full transition-all duration-500 z-0"></span>
            </a>
          </div>
        </div>
        <div className="max-w-[600px]  grid-cols-2 gap-6 hidden">
          <StateItem label="years of experience" number={"12"} />
          <StateItem label="Completed projects" number={"02"} />
          <StateItem label="happy customers" number={"10"} />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease"
        className="flex items-center justify-center flex-col px-6 lg:px-20 mt-28 pb-20"
      >
        <div className="font-semibold text-2xl tracking-wide">
          SKILLS & TOOLS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-x-20 lg:gap-y-12 mt-12">
          <SkillItem label="html" number={80} />
          <SkillItem label="css" number={87} />
          <SkillItem label="Javascript" number={84} />
          <SkillItem label="react" number={79} />
          <SkillItem label="php" number={65} />
          <SkillItem label="laravel" number={55} />
          <SkillItem label="Tailwind" number={90} />
          <SkillItem label="Mysql" number={68} />
          <SkillItem label="Mongodb" number={72} />
          <SkillItem label="Github" number={68} />
        </div>
      </div>
    </section>
  );
};

export default About;
