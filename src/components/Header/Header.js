import { Link } from "react-router-dom";

// my Image
import myImage from "../../assets/my-image-1.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header className="bg-center bg-no-repeat bg-cover mb-4 h-[39rem] px-4 bg-header-background ">
      <div className="flex container max-w-screen-xl  m-auto h-full relative flex-col justify-start items-center pt-8">
        <div>
          <h3 className="text-stone-300 md:text-lg  text-xs bg-fixed mb-2 text-center">
            Hello,I`m
          </h3>
          <h1 className="text-6xl mb-2 hover:blur-md md:text-7xl text-blue-400 hover:rotate-180 hover:scale-50 text-center duration-500">
            Shahram
          </h1>
          <h3 className="text-center text-xs md:text-lg text-slate-300 mb-8">
            Junior Front Developer
          </h3>
        </div>
        <div className="flex mb-4 justify-between gap-4">
          <Link
            to="/"
            className="text-blue-400 border md:text-lg border-blue-400 rounded-md p-2 text-sm"
          >
            Download CV
          </Link>
          <Link
            to="/"
            className="bg-blue-400 rounded-md md:text-lg font-thin p-2 text-gray-800  text-sm"
          >
            Lets`Talk
          </Link>
        </div>
        <HeaderSocial />
        <a href="#contactUs" className="text-blue-400 absolute right-0 bottom-20 font-bold cursor-pointer rotate-90">Scroll Down</a>
        <div className="absolute hover:opacity-50 duration-700 hover:rotate-[20deg] w-[200px] sm:w-72 hover:scale-75 hover: left-1/2  md:w-64 bottom-2 -translate-x-1/2 mt-4 rounded-br-[15rem] rounded-t-[11rem] bg-blue-400  flex justify-center items-center">
          <img
            src={myImage}
            className="object-fill w-full  border-b-8 border-red-400 rounded-r-full  drop-shadow-2xl"
            alt="my/Image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
