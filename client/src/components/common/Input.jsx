import React from "react";

const Input = ({ feedback, className, ...props }) => {
  return (
    <>
      <input
        {...props}
        className=" w-full rounded border-[1.5px] border-stroke  py-2 px-1.5 text-black"
      />
      {feedback && feedback[0] && feedback[1] && (
        <span className="text-red-500">{feedback[0]}</span>
      )}
    </>
  );
};

export default Input;
