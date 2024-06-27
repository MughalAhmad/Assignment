import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const Loader = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center absolute bg-slate-400 opacity-50 z-[100]">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          size="2xl"
          className="text-black"
        />
      </div>
    </>
  );
};

export default Loader;
