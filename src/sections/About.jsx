import React from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { TbDownload } from "react-icons/tb";
import StateItem from "../components/StateItem";
import SkillItem from "../components/SkillItem";

const About = () => {
  return (
    <section className="w-full min-h-screen ">
      <div className="w-full flex items-center justify-center py-14">
        <Heading title="About" subTitle="resume" highlighted="me" />
      </div>
      <div className="flex items-center justify-center px-20">
        <div className="w-[50%] flex justify-center flex-col gap-8 ">
          <div className="font-semibold text-2xl tracking-wide">
            PERSONAL INFOS
          </div>
          <div className="grid grid-cols-2 gap-x-0 gap-y-4">
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
            <Button
              label="download cv"
              icon={<TbDownload />}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="max-w-[600px] grid grid-cols-2 gap-6">
          <StateItem label="years of experience" number={"12"} />
          <StateItem label="Completed projects" number={"02"} />
          <StateItem label="happy customers" number={"10"} />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col px-20 mt-28 pb-20">
        <div className="font-semibold text-2xl tracking-wide">
          SKILLS & TOOLS
        </div>
        <div className="grid grid-cols-5 gap-x-20 gap-y-12 mt-12">
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
