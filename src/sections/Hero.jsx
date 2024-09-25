import React, { useEffect } from "react";
import Button from "../components/Button";
import { TbArrowRight } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../assets/zakaria.jpg";

const Hero = ({ onClick }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center lg:justify-center pb-20 lg:pb-0 lg:flex-row z-10"
    >
      <div className="lg:w-[45%] w-[70%] p-12 relative flex items-center justify-center lg:h-screen ">
        <div className="absolute hidden lg:block lg:w-[60%] w-screen h-full lg:skew-x-12 top-0 lg:-left-28 bg-primary"></div>
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-easing="ease"
          className="relative max-w-[500px] h-[80%] rounded-full lg:rounded-2xl flex items-center justify-center  overflow-hidden border-primary border-4 lg:border-0"
        >
          <img className="w-full h-full object-cover" src={me} alt="portrait" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease"
        className="lg:w-[55%] text-gray-800 dark:text-gray-200 flex items-center lg:items-start flex-col justify-center gap-6 px-6 lg:px-0 lg:mr-24"
      >
        <div className="flex items-center gap-4">
          <div className="h-1.5 w-12 hidden lg:block bg-primary rounded-xl"></div>
          <div className="lg:text-5xl text-3xl font-extrabold text-center lg:text-start">
            <span className="text-primary">
              I'M BOUACHERAH <br /> ZAKARIA.
            </span>
            <br />
            <span>WEB DEVELOPER</span>
          </div>
        </div>
        <div className="max-w-[660px] leading-relaxed lg:text-lg font-normal text-center lg:text-start">
          As a Moroccan web developer, I focus on creating clean, user-friendly
          websites and applications. With a passion for crafting excellent
          software, I aim to improve digital experiences. I stay updated on the
          latest technologies to deliver high-quality solutions that positively
          impact users' lives.
        </div>
        <Button
          icon={<TbArrowRight />}
          label={"More About Me"}
          onClick={onClick}
        />
      </div>
    </section>
  );
};

export default Hero;
