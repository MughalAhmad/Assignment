import React from "react";
import NoImageAvailable from "../../assets/NoImageAvailable.jpg";

const Image = ({ file, name, feedback, setFieldValue }) => {
  return (
    <>
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          className="bg-black-200 h-16 w-16 absolute rounded-full border-2 border-gray-500 p-1 md:h-32 md:w-32"
        />
      ) : (
        <img
          src={NoImageAvailable}
          alt=""
          className=" h-16 w-16 absolute rounded-full md:h-32 md:w-32 "
        />
      )}

      <input
        type="file"
        accept="image/*"
        name="file"
        className="h-16 w-16 border opacity-0 rounded-full  cursor-cell md:h-32 md:w-32 "
        onChange={(event) => {
          setFieldValue(`${name}`, event.target.files[0]);
        }}
      />
      {feedback && feedback[0] && feedback[1] && (
        <span className="text-red-500 w-14 md:w-full">{feedback[0]}</span>
      )}
    </>
  );
};

export default Image;
