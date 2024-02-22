/* eslint-disable @next/next/no-img-element */
import { Instagram } from "lucide-react";
import React from "react";

const Form = () => {
  return (
    <section className="relative -z-10 flex h-[800px] w-full flex-col items-center justify-center gap-10 text-center  text-white [transform-style:preserve-3d]">
      <img
        src="https://placehold.co/1280x720/?text=Image"
        alt="sample"
        className="absolute -z-10 h-full w-full object-cover [transform:translateZ(-50px)_scale(2.5)]"
      />
      <div className="absolute top-[400px] mb-20 h-fit w-full bg-[#d9d9d9]">
        <div className="container mx-auto -mt-[80px] flex items-center justify-center pb-[480px]">
          <div className="ml-24 rotate-180 self-start justify-self-end text-9xl font-light uppercase [writing-mode:vertical-lr]">
            Contact
          </div>
          <div className="relative mr-16 h-[900px] w-[700px] space-y-10 rounded-xl bg-white p-20">
            <img
              src="https://placehold.co/1280x720/?text=Image"
              alt="sample"
              className="absolute -bottom-[45%] -left-[15%] h-[475px] w-[345px] rounded-xl object-cover"
            />
          </div>
          <div className="flex w-[200px] flex-col gap-10 text-start font-light leading-loose tracking-wide text-black">
            <p>
              I&apos;d love to hear from you! Please allow us to answer within
              24 hours.
            </p>
            <p>
              Use the form below or email us at:
              <br />
              contact@renaistudio.com
            </p>
            <Instagram color="black" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
