import React from "react";
import bannerImg from "../../../assets/banner.png";
import { Sparkles, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100 transition-transform hover:scale-105 cursor-default">
            <Sparkles size={16} className="animate-pulse" />
            <span>New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Supercharge Your <br className="hidden lg:block" />
            Digital Workflow
          </h1>

          <p className="max-w-xl text-gray-500 text-lg md:text-xl leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 w-full">
            <button className="px-8 py-4 bg-linear-to-b from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-full hover:shadow-lg hover:opacity-90 transition-all transform active:scale-95">
              Explore Products
            </button>
            <button className="px-8 py-4 flex items-center gap-2 border-2 border-gray-200 rounded-full font-bold text-gray-700 hover:bg-gray-50 transition-all">
              <Play size={20} fill="currentColor" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center group">
          <div className="absolute inset-0 bg-fuchsia-200 blur-[100px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity"></div>

          <img
            src={bannerImg}
            alt="Platform Preview"
            className="relative w-full max-w-150 h-auto drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
