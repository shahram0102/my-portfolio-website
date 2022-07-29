import { DiCss3 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { SiMaterialui } from "./react-icons/Si";
import { SiGraphql } from "./react-icons/Si";

import { OneOfExpertise } from "./OneOfExpertise";

const experiences = [
  {
    icon: <AiOutlineHtml5 />,
    typeExpertise: "html5",
    levelExpertise: "experienced",
    descExpertise:
      "Full familiarity with html5, I know all the necessary and important tags.",
  },
  {
    icon: <DiCss3 />,
    typeExpertise: "css3",
    levelExpertise: "experienced",
    descExpertise:
      "Getting to know the advanced features of raw css and working with raw css without the need for a framework.",
  },
  {
    icon: <TbBrandJavascript />,
    typeExpertise: "javascript",
    levelExpertise: "intermediate",
    descExpertise:
      "Familiarity with dom topics and array methods. Proficient with http request topics. Java Script is an endless ocean and I am always learning Java Script.",
  },
  {
    icon: <FaGitAlt />,
    typeExpertise: "git",
    levelExpertise: "experienced",
    descExpertise:
      "Complete mastery of Git to work in group environments and teamwork.",
  },

  {
    icon: <SiTailwindcss />,
    typeExpertise: "tailwind",
    levelExpertise: "experienced",
    descExpertise:
      "The good feeling of working with tailwind cannot be found in any framework. It is really enjoyable. I practice every day to become an expert in the full sense of tailwind.",
  },
  {
    icon: <FaReact />,
    typeExpertise: "react",
    levelExpertise: "experienced",
    descExpertise:
      "Complete familiarity with functional components and relative control over component classes. Familiarity with most popular React packages.",
  },
  {
    icon: <DiSass />,
    typeExpertise: "sass",
    levelExpertise: "Low mastery",
    descExpertise: "I have just started learning sass and I am learning.",
  },
  {
    icon: <SiMaterialui />,
    typeExpertise: "materialUI",
    levelExpertise: "middle mastery",
    descExpertise: "Relative mastery of ready-made mUI components and their use.",
  },
  {
    icon: <SiGraphql />,
    typeExpertise: "GraphQL",
    levelExpertise: "Low mastery",
    descExpertise: "I have a brief knowledge of GraphQL and I have the ability to work with APIs in this way.",
  },
];

const Experience = () => {
  return (
    <section className="container mb-8 px-8 m-auto flex flex-col justify-center items-center mt-4">
      <div className="flex flex-col mb-12  items-center gap-2">
        <h4 className="text-gray-800 font-semibold">What Skils I Have</h4>
        <h2 className="text-blue-400 font-bold text-5xl">My Experience</h2>
      </div>
      <div className="flex flex-col items-center gap-12 shadow-xl w-full">
        <h3 className="text-blue-400 font-black text-xl">
          Front End Development
        </h3>
        <div className="grid grid-cols-2 bg-blue-900 p-1  max-w-3xl rounded-lg">
          {experiences.map((item) => {
            return <OneOfExpertise key={item.typeExpertise} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
