import React from "react";
import userImg from "../../../assets/user.png";
import productImg from "../../../assets/package.png";
import rocketImg from "../../../assets/rocket.png";

const GetStart = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className=" text-center my-10">
        <h1 className="text-5xl mb-2">Get Started in 3 Steps</h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="border-2 border-gray-200 rounded-2xl bg-base-100 shadow-sm p-20 justify-items-center text-center space-y-4 relative">
          <div className="bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] p-4 rounded-full absolute top-5 right-5 z-10">
            <h2 className="text-3xl text-white font-extraboldbold">01</h2>
          </div>
          <img
            src={userImg}
            alt=""
            className="p-3 rounded-full bg-fuchsia-100"
          />
          <h3 className="text-2xl font-bold">Create Account</h3>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="border-2 border-gray-200 rounded-2xl bg-base-100 shadow-sm p-20 justify-items-center text-center space-y-4 relative">
          <div className="bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] p-4 rounded-full absolute top-5 right-5 z-10">
            <h2 className="text-3xl text-white font-extraboldbold">02</h2>
          </div>
          <img
            src={productImg}
            alt=""
            className="p-3 rounded-full bg-fuchsia-100"
          />
          <h3 className="text-2xl font-bold">Choose Products</h3>
          <p>Browse our catalog and select the tools that fit your needs.</p>
        </div>
        <div className="border-2 border-gray-200 rounded-2xl bg-base-100 shadow-sm p-20 justify-items-center text-center space-y-4 relative ">
          <div className="bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] p-4 rounded-full absolute top-5 right-5 z-10">
            <h2 className="text-3xl text-white font-extraboldbold">03</h2>
          </div>
          <img
            src={rocketImg}
            alt=""
            className="p-4 rounded-full bg-fuchsia-100 "
          />
          <h3 className="text-2xl font-bold">Start Creating</h3>
          <p>Download and start using your premium tools immediately. </p>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
