import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [sideBar, setSideBar] = useState("none");
  const handleSideBar = () => {
    if (sideBar === "none") {
      setSideBar("block");
    } else {
      setSideBar("none");
    }
  };

  return (
    <div>
      <div className="bg-white fixed border-b-2 border-[#00A0DE]  w-full h-16   hidden sm:flex sm:justify-between sm:items-center z-20 ">
        <div className="h-full px-4  flex justify-center items-center ">
          <img src={logo} alt="none" className="w-16 h-16" />
        </div>

        <div className=" w-2/6 h-full flex items-center justify-end pr-5 ">
          <span
            onClick={() => handleLogout()}
            className="no-underline hover:text-white cursor-pointer px-7 py-2 text-[#00A0DE] text-base font-semibold hover:bg-blue-300 hover:rounded-lg border rounded-lg"
          >
            Logout
          </span>
        </div>
      </div>

      {/* mobile menu */}

      <div className="bg-white border-b border-black  w-full py-1 px-2 top-0 flex fixed sm:hidden z-10">
        <div className="flex justify-between w-full items-center">
          <img src={logo} alt="none" className="w-16 h-16" />
          <FontAwesomeIcon
            className="text-2xl"
            icon={faBars}
            onClick={() => handleSideBar()}
          />
        </div>

        <div
          style={{ display: sideBar }}
          className="fixed top-12  right-0 h-auto shadow-lg w-44 z-30 bg-white pl-3 "
        >
          <span
            onClick={() => handleLogout()}
            className="text-[#00A0DE] flex items-center justify-start w-full p-2 my-2 font-normal  uppercase "
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
