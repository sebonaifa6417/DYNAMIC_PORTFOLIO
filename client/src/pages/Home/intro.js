import React from "react";

function intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8">
      <h1 className="text-white">Hi , I am</h1>
      <h1 className="text-7xl sm:text-3xl font-semibold text-secondary">
        Sebona Ifa Negewo
      </h1>
      <h1 className="text-7xl sm:text-3xl font-semibold text-white">
        I build things for the web
      </h1>
      <p className="text-white w-1/2">
        I am fullstack website and application developer, currently i am working
        as Javascript developer in Ethiopia, in addition to that i am sharing my
        knowledge through social media for someone interested in tech world.
      </p>
      <button className="border-2 border-tertiary px-10 py-3  text-tertiary rounded">Get Started</button>
    </div>
  );
}

export default intro;
