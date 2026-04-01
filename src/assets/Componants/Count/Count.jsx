import React from "react";

const STATS = [
  { label: "Active Users", value: "50k+" },
  { label: "Premium Tools", value: "200+" },
  { label: "Rating", value: "4.9/5" },
];

const Count = () => {
  return (
    <section className="bg-linear-to-b from-[#4f39f6] to-[#9514fa]">
      <div className="max-w-7xl w-11/12 mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {STATS.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                {stat.value}
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Count;
