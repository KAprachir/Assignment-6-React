import React from "react";

const Count = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)]">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 p-15 text-center">
        <div>
          <h1 className="text-[60px] text-white">50k+</h1>
          <p className="text-2xl text-white">Active User</p>
        </div>
        <div>
          <h1 className="text-[60px] text-white">200+</h1>
          <p className="text-2xl text-white">Premium Tools</p>
        </div>
        <div>
          <h1 className="text-[60px] text-white">4.9</h1>
          <p className="text-2xl text-white">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
