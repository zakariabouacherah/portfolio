import React from "react";
import Button from "../components/Button";
import { TbArrowRight } from "react-icons/tb";

const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen flex">
      <div className="w-[45%] p-12 relative flex items-center justify-center ">
        <div className="absolute w-[60%] h-full skew-x-12 top-0 -left-28 bg-primary"></div>
        <div className="relative max-w-[500px] h-full rounded-2xl flex items-center justify-center  overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.squarespace-cdn.com/content/v1/607c008b69fa285adb35d089/2cd59148-0884-4ce5-930e-23da28991a4b/ALONZO-LICHT.jpg?format=1000w"
            alt="portrait"
          />
        </div>
      </div>
      <div className="w-[55%] text-gray-800 dark:text-gray-200 flex items-start flex-col justify-center gap-6 mr-24">
        <div className="flex items-center gap-4">
          <div className="h-1.5 w-12 bg-primary rounded-xl"></div>
          <div className="text-5xl font-extrabold">
            <span className="text-primary">
              I'M BOUACHERAH <br /> ZAKARIA.
            </span>
            <br />
            <span>WEB DEVELOPER</span>
          </div>
        </div>
        <div className="max-w-[660px] leading-relaxed text-lg font-normal">
          As a Moroccan web developer, I focus on creating clean, user-friendly
          websites and applications. With a passion for crafting excellent
          software, I aim to improve digital experiences. I stay updated on the
          latest technologies to deliver high-quality solutions that positively
          impact users' lives.
        </div>
        <Button icon={<TbArrowRight />} label={"More About Me"} />
      </div>
    </section>
  );
};

export default Hero;
