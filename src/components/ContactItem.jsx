import React from "react";

const ContactItem = ({ icon, label, description }) => {
  return (
    <div className="py-4 flex gap-4">
      <div className="text-primary text-4xl"> {icon} </div>
      <div>
        <div className="uppercase font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
          {label}
        </div>
        <div className=" text-black dark:text-white"> {description} </div>
      </div>
    </div>
  );
};

export default ContactItem;
