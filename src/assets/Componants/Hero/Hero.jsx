import React from "react";
import bannerImg from "../../../assets/banner.png";
import { Circle, Play } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto justify-center items-center p-20 gap-10">
        <div className="space-y-5">
          <div className="badge badge-soft badge-info p-4 text-lg rounded-full">
            <Circle /> New: AI-Powered Tools Available
          </div>
          <div className="space-y-4">
            {" "}
            <h1 className="text-7xl font-extrabold leading-20">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="text-[#627382] font-normal leading-8">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
          </div>
          <div className="space-x-4">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-full">
              {" "}
              <Play /> Watch Demo
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
