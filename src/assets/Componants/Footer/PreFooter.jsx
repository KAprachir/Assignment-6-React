import React from "react";

const PreFooter = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] py-20">
      <div className="w-10/12 mx-auto text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-base md:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed mb-10">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          <button className="bg-white text-[#8B2CF5] font-semibold px-10 py-4 rounded-full hover:bg-purple-50 transition-all shadow-lg">
            Explore Products
          </button>

          <button className="border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-[#8B2CF5] transition-all">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-purple-200 opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default PreFooter;
