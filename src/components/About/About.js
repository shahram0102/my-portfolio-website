// icons
import { FaBirthdayCake } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";

// my Image
import myImage from "../../assets/my-image-2.jpg";
import CartInformation from "./CartInformation";

const About = () => {
  return (
    <section className="flex px  flex-col justify-center items-center pt-2 container  m-auto">
      <div className="flex mb-4 flex-col gap-2 justify-center items-center">
        <h4 className="text-gray-800 text-sm md:text-lg">Get To Know</h4>
        <h2 className="text-blue-400 text-3xl font-bold md:text-4xl">
          About Me
        </h2>
      </div>
      <div className="flex flex-col xl:justify-between gap-4 p-12 w-full md:flex-row  ">
        <div className="w-full h-fit mb-4 rounded-3xl bg-blue-400  xl:w-4/12 md:w-1/3 ">
          <img
            src={myImage}
            className="w-full duration-300  rotate-2 md:rotate-6 hover:rotate-0 rounded-3xl h-auto"
            alt="personal image"
          />
        </div>
        <div className="flex md:w-2/3 xl:w-6/12 justify-center items-center flex-col">
          <div className="flex xl:flex-row md:pl-8 xl:gap-x-4 xl:justify-between  w-full flex-col gap-y-4">
            <CartInformation
              icon={<FaBirthdayCake />}
              title={"21 years"}
              desc={"birth in 2002"}
            />
            <CartInformation
              icon={<MdDesignServices />}
              title="Front End"
              desc={"I`am junior Front End Developer"}
            />
            <CartInformation
              icon={<HiOutlineDesktopComputer />}
              title={"project"}
              desc={"my project in experience"}
            />
          </div>
          <div className="flex flex-col mt-8 gap-8 items-start w-full">
            <p className="text-gray-800 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              ornare suspendisse sed nisi lacus. Sollicitudin ac orci phasellus
            </p>
            <button className="bg-blue-400 text-gray-800 text-lg rounded-lg p-1 px-2">
              Let`s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
