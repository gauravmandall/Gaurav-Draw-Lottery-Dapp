import { useMetamask } from "@thirdweb-dev/react";
import React from "react";

function Login() {
  const connectWithMetamask = useMetamask();

  return (
    <div
      className="bg-[#091B18] min-h-screen flex flex-col 
    items-center justify-center text-center"
    >
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 wo-56 mb-10"
          src="https://pbs.twimg.com/profile_images/1585956450446155776/OnQmVMtW_400x400.jpg"
          alt=""
        />
        <h1 className="text-6xl text-white font-bold">THE GAURAV DRAW</h1>
        <h2 className="text-white">
          Get Started By logging in with your Metamask
        </h2>
        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with Metamask
        </button>
      </div>
    </div>
  );
}

export default Login;
