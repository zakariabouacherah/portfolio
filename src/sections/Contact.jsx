import React, { useEffect, useRef, useState } from "react";
import Heading from "../components/Heading";
import { TbMailOpened, TbMapPin2, TbPhoneCall, TbSend } from "react-icons/tb";
import ContactItem from "../components/ContactItem";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    Aos.init();
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!form.current.name.value.trim()) {
      errors.name = "Name is required";
    }
    if (!form.current.email.value.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.current.email.value.trim())) {
      errors.email = "Email is invalid";
    }
    if (!form.current.subject.value.trim()) {
      errors.subject = "Subject is required";
    }
    if (!form.current.message.value.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm("service_ey1nbwj", "template_9opy13o", form.current, {
          publicKey: "Ka4TaM-KhvRYho5JA",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Message sent successfully");
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Failed to send message");
          }
        );
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center flex-col z-10">
      <div
        data-aos="zoom-in-down"
        data-aos-duration="700"
        data-aos-easing="ease"
        className="w-full flex items-center justify-center py-20"
      >
        <Heading title="get in" subTitle="contact" highlighted="touch" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease"
        className="flex flex-col lg:flex-row items-start justify-center gap-16 px-6 lg:px-20 pb-20 max-w-7xl"
      >
        <div className="lg:w-[35%] ">
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
                "Hay Kasbat Taher Ait Melloul, Ait Melloul 80000, Agadir Ida Outanan."
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
        <div className="w-full lg:w-[65%]">
          <form
            ref={form}
            className="grid grid-cols-2 gap-2 lg:gap-x-4 lg:gap-y-8 mb-8"
          >
            <div className="relative col-span-2 lg:col-span-1">
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="relative w-full py-3 px-6 rounded-full placeholder: placeholder:uppercase placeholder:opacity-60 bg-neutral-50 dark:bg-neutral-700 outline-none border-[1px] border-neutral-300 dark:border-transparent focus:border-primary focus:dark:border-primary"
              />
              {errors.name && (
                <span className="text-rose-600 text-sm mt-1 absolute bottom-[-20px] left-4 ">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="relative col-span-2 lg:col-span-1">
              <input
                type="text"
                name="email"
                placeholder="your email"
                className="relative w-full py-3 px-6 rounded-full placeholder: placeholder:uppercase placeholder:opacity-60 bg-neutral-50 dark:bg-neutral-700 outline-none border-[1px] border-neutral-300 dark:border-transparent focus:border-primary focus:dark:border-primary"
              />
              {errors.email && (
                <span className="text-rose-600 text-sm mt-1 absolute bottom-[-20px] left-4 ">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="relative col-span-2">
              <input
                type="text"
                name="subject"
                placeholder="your subject"
                className="w-full relative py-3 px-6 rounded-full placeholder: placeholder:uppercase placeholder:opacity-60 bg-neutral-50 dark:bg-neutral-700 outline-none border-[1px] border-neutral-300 dark:border-transparent focus:border-primary focus:dark:border-primary"
              />
              {errors.subject && (
                <span className="text-rose-600 text-sm mt-1 absolute bottom-[-20px] left-4 ">
                  {errors.subject}
                </span>
              )}
            </div>
            <div className="relative col-span-2 ">
              <textarea
                placeholder="Your message"
                name="message"
                rows={6}
                className="w-full relative resize-none py-3 px-6 rounded-3xl placeholder: placeholder:uppercase placeholder:opacity-60 bg-neutral-50 dark:bg-neutral-700 outline-none border-[1px] border-neutral-300 dark:border-transparent focus:border-primary focus:dark:border-primary"
              ></textarea>
              {errors.message && (
                <span className="text-rose-600 text-sm mt-1 absolute bottom-[-20px] left-4 ">
                  {errors.message}
                </span>
              )}
            </div>
          </form>
          <Button
            icon={<TbSend />}
            label={"Send message"}
            onClick={sendEmail}
          />
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default Contact;
