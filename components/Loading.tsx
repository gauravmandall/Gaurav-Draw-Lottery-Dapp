import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img
          className="rounded-full h-20 w-20"
          src="https://pbs.twimg.com/profile_images/1585956450446155776/OnQmVMtW_400x400.jpg"
          alt=""
        />
        <h1 className="text-lg text-white font-bold">
          Loading the GAURAV DRAW
        </h1>
      </div>
      <PropagateLoader color="#4FD1C5" size={30} />
    </div>
  );
}

export default Loading;
