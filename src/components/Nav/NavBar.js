import { Link } from "react-router-dom";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [active, setIsActive] = useState(0);

  return (
    <nav className="flex justify-between px-1 items-center w-96 m-auto rounded-xl fixed bottom-2 left-0 right-0 bg-[rgba(0,0,0,0.3)]">
      <li className="list-none py-2 px-2 mx-2">
        <Link
          onClick={() => setIsActive(1)}
          className={`px-4 ${
            active == 1 && "bg-blue-400"
          } hover:text-blue-400 duration-300 rounded-lg hover:bg-[rgba(0,0,0,0.3)]   py-2 block`}
          to="/"
        >
          <AiOutlineHome className="text-2xl" />
        </Link>
      </li>
      <li className="list-none py-2 px-2 mx-2">
        <Link
          onClick={() => setIsActive(2)}
          className={`px-4 ${
            active == 2 && "bg-blue-400"
          } hover:text-blue-400 duration-300 rounded-lg hover:bg-[rgba(0,0,0,0.3)]   py-2 block`}
          to="/about"
        >
          <BiUser className="text-2xl" />
        </Link>
      </li>
      <li className="list-none py-2 px-2 mx-2">
        <Link
          onClick={() => setIsActive(3)}
          className={`px-4 ${
            active == 3 && "bg-blue-400"
          } hover:text-blue-400 duration-300 rounded-lg hover:bg-[rgba(0,0,0,0.3)]   py-2 block`}
          to="/experience"
        >
          <FiBookOpen className="text-2xl" />
        </Link>
      </li>

      <li className="list-none py-2 px-2 mx-2">
        <Link
          onClick={() => setIsActive(4)}
          className={`px-4 ${
            active == 4 && "bg-blue-400"
          } hover:text-blue-400 duration-300 rounded-lg hover:bg-[rgba(0,0,0,0.3)]   py-2 block`}
          to="/contact"
        >
          <AiOutlineMessage className="text-2xl" />
        </Link>
      </li>
    </nav>
  );
};

export default NavBar;
