import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Javascript",
    "React",
    "Express",
    "MongoDB",
    "Node",
    "Firebase",
  ];

  return (
    <div>
      <SectionTitle title="About Me" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[50vh] w-full sm:w-full">
          <dotlottie-wc
            src="https://lottie.host/c8fa6238-b1bc-49f4-9370-631413670297/NOrFMPpxau.lottie"
            autoplay
            loop
          ></dotlottie-wc>
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-full">
          <p className="text-white text-xl">
            Hello, my name is Sebona Ifa. I enjoy creating things that live on
            the internet. My interest in web development started in 2021. I
            started my first website development by using HTML, CSS, and
            JavaScript by building different projects like a portfolio,
            calculator, and others. Afterward, I became aware of the JavaScript
            programming language.
          </p>
          <p className="text-white text-xl">
            I started studying frameworks of JavaScript like React, Node.js,
            Express.js, and MongoDB. After studying those frameworks, I began
            building full-stack web applications.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10 rounded" key={index}>
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
