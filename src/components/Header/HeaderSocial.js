import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="flex after:w-px cursor-pointer after:h-12 after:bg-blue-400  flex-col items-center gap-3 text-2xl absolute left-0 bottom-12">
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/shahram-khaleh-a36509246"
        className="text-blue-400 hover:text-white duration-200 "
        target={"_blank"}
      >
        <FaLinkedin />
      </a>
      <a
        className="text-blue-400 hover:text-white duration-200"
        href="https://github.com/shahram0102"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
