/* eslint-disable @next/next/no-img-element */

const Section4 = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-center">
        <div className="relative grid w-[1000px] grid-cols-1 items-center justify-center gap-40 p-20 pb-48 md:grid-cols-2">
          <div className="col-span-full w-full tracking-wider">
            <div className="text-7xl lowercase italic text-gray-500">The</div>
            <div className="text-6xl uppercase">Experience</div>
          </div>
          <div className="col-span-1 ml-4 w-[400px] place-self-start">
            <h2 className="mb-16 text-sm uppercase tracking-[0.25em]">
              Our Mission
            </h2>
            <p className="text-md mb-16 font-light leading-loose">
              Setting aside trends, we bring forward editorial aesthetic
              alongside photojournalistic style of photography, creating
              cinematic, yet authentic images which will stand the test of time
              while highlighting the look and feel of the wedding. Allowing you
              to return to these images in years to come conjuring the same love
              you were feeling on the day.
            </p>
            <button className="text-xs uppercase tracking-[0.25em] underline underline-offset-8">
              Discover More
            </button>
          </div>
          <img
            src="https://placehold.co/400x600/?text=Image"
            alt="sample"
            className="absolute -bottom-16 -right-24 col-span-1 mt-[25px] h-[600px] w-[400px] place-self-end self-start rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
