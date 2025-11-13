import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Course() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="courses" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          <div className="flex flex-col gap-5">
            {courses.map((course, index) => (
              <div
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
                className="cursor-pointer"
              >
                <h1
                  className={`text-xl px-5 ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#07524170] py-3"
                      : "text-white"
                  }`}
                >
                  {course.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={courses[selectedItemIndex].image}
            alt=""
            className="h-52 w-80"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {courses[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
