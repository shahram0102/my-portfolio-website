import React from "react";

export const OneOfExpertise = ({ item }) => {
  const { icon, typeExpertise, levelExpertise, descExpertise } = item;
  return (
    <div className="flex gap-1 p-2">
      <div className="text-blue-400 text-xl md:text-3xl">{icon}</div>
      <div>
        <p className="text-lg md:text-2xl uppercase mb-1">{typeExpertise}</p>
        <p className="text-sm md:text-lg text-blue-300 font-semibold mb-[2px]">
          {levelExpertise}
        </p>
        <p className="text-xs md:text-sm leading-5 text-white">
          {descExpertise}
        </p>
      </div>
    </div>
  );
};
