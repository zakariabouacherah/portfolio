import React from "react";
import Heading from "../components/Heading";
import { TbMailOpened, TbMapPin2, TbPhoneCall, TbSend } from "react-icons/tb";
import ContactItem from "../components/ContactItem";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center flex-col ">
      <div className="w-full flex items-center justify-center py-20">
        <Heading title="get in" subTitle="contact" highlighted="touch" />
      </div>
      <div className="flex items-start justify-center gap-16 px-20 max-w-7xl">
        <div className="w-[35%] ">
          <div className="font-semibold text-2xl tracking-wide mb-2">
            DON'T BE SHY !
          </div>
          <div className="text-[15px] font-light opacity-90 ">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <ContactItem
              icon={<TbMapPin2 />}
              label={"Address point"}
              description={
                "123 Ida Ougnidif, Ait Melloul 80000, Agadir Ida Outanan."
              }
            />
            <ContactItem
              icon={<TbMailOpened />}
              label={"Mail me"}
              description={"zakabouach111@gmail.com"}
            />
            <ContactItem
              icon={<TbPhoneCall />}
              label={"call me"}
              description={"+212 697 384 256"}
            />
          </div>
        </div>
        <div className="w-[65%]">
          <form className="grid grid-cols-2 gap-x-4 gap-y-8 mb-8">
            <input
              type="text"
              placeholder="your name"
              className="py-3 px-6 rounded-full placeholder: placeholder:uppercase placeholder:opacity-60 bg-neutral-50 dark:bg-neutral-700 outline-none border-[1px] border-neutral-300 dark:border-transparent focus:border-primary focus:dark:border-primary"
            />
            <input
              type="text"
              placeholder="your email"
              className="py-3 px-6 rounded-full placeholder: placeholder:uppercase placeholder:opacity-60 bg-neutral-50 dark:bg-neutral-700 outline-none border-[1px] border-neutral-300 dark:border-transparent focus:border-primary focus:dark:border-primary"
            />
            <input
              type="text"
              placeholder="your subject"
              className="col-span-2 py-3 px-6 rounded-full placeholder: placeholder:uppercase placeholder:opacity-60 bg-neutral-50 dark:bg-neutral-700 outline-none border-[1px] border-neutral-300 dark:border-transparent focus:border-primary focus:dark:border-primary"
            />
            <textarea
              placeholder="Your message"
              rows={6}
              className="resize-none col-span-2 py-3 px-6 rounded-3xl placeholder: placeholder:uppercase placeholder:opacity-60 bg-neutral-50 dark:bg-neutral-700 outline-none border-[1px] border-neutral-300 dark:border-transparent focus:border-primary focus:dark:border-primary"
            ></textarea>
          </form>
          <Button icon={<TbSend />} label={"Send message"} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
