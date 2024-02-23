/* eslint-disable @next/next/no-img-element */
import Balancer from "react-wrap-balancer";

const Section6 = () => {
  return (
    <section className="relative -z-10 flex h-[800px] w-full flex-col items-center justify-center gap-10 text-center uppercase text-white [transform-style:preserve-3d]">
      <img
        src="https://placehold.co/1280x720/?text=Image"
        alt=""
        className="absolute -z-10 h-[200%] w-full object-cover [transform:translateZ(-50px)_scale(2)]"
      />

      <span className="w-[800px] text-6xl font-light">
        <Balancer>Love is the poetry of the senses.</Balancer>
      </span>
      <span className="text-sm tracking-[0.25em]">- Honore De Balzax</span>
    </section>
  );
};

export default Section6;
