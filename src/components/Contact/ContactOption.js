import React from "react";

function ContactOption({ item }) {
  const { icon, title, desc, link, btnText } = item;
  return (
    <a
      href={link}
      target="_blank"
      className="flex p-8  duration-300 hover:shadow-xl hover:shadow-blue-600 hover:scale-105 hover:text-blue-700 hover:bg-blue-200 rounded-3xl flex-col justify-center items-center bg-blue-800 min-w-[250px] max-w-[250px]"
    >
      <div className="text-xl mb-2">{icon}</div>
      <h4 className="font-bold text-lg">{title}</h4>
      <h5 className="text-sm  mb-4">{desc}</h5>
      <span className="text-blue-400 font-semibold">{btnText}</span>
    </a>
  );
}

export default ContactOption;
