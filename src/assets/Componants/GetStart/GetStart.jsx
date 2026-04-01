import React from "react";
import userImg from "../../../assets/user.png";
import productImg from "../../../assets/package.png";
import rocketImg from "../../../assets/rocket.png";

const STEPS = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    img: userImg,
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    img: productImg,
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    img: rocketImg,
  },
];

const GetStart = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Get Started in 3 Steps
        </h2>
        <p className="text-gray-500 text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STEPS.map((step) => (
          <div
            key={step.id}
            className="group relative border-2 border-gray-100 rounded-3xl bg-white p-8 md:p-12 text-center transition-all duration-300 hover:border-fuchsia-200 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute top-6 right-6 bg-linear-to-b from-[#4f39f6] to-[#9514fa] w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">{step.id}</span>
            </div>

            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-fuchsia-50 group-hover:bg-fuchsia-100 transition-colors">
              <img
                src={step.img}
                alt={step.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStart;
