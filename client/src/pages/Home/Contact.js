import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Sebona Ifa Negewo",
    email: "sebonaifa777@gmail.com",
    Phone_No: "+251949557556",
    Job: "FullStack Developer",
    Country: "Ethiopia",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-white text-sm">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5 text-white text-sm">
              <span className="text-tertiary">{key}</span> :{" "}
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-white text-sm">{"}"}</p>
        </div>
        <div className="h-[500px]">
            <dotlottie-wc
                src="https://lottie.host/9bdc53ef-fe2b-4369-a335-6e67f635a6e1/UMEjT2fMcI.lottie"
                autoplay
                loop>
            </dotlottie-wc>
             
        </div>
      </div>
    </div>
  );
}

export default Contact;
