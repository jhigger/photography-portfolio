/* eslint-disable @next/next/no-img-element */

const Section2 = () => {
  return (
    <section className="bg-[#e4e2dd] py-28">
      <div className="container mx-auto grid grid-cols-1 gap-28 md:grid-cols-2">
        <img
          src="https://placehold.co/800x1200/?text=Image"
          alt="sample"
          className="-mt-[175px] w-[461px] place-self-end self-start rounded-xl"
        />
        <div className="w-[500px] place-self-start">
          <h2 className="mb-28 text-sm uppercase tracking-[0.25em]">
            Behind The Lens
          </h2>
          <p className="mb-10 text-2xl">
            Zak and his Renai team&apos;s editorial style of photography shapes
            the creation of lifelong memories that radiate true emotive moments.
          </p>
          <p className="text-md mb-16 font-light leading-loose">
            Drawing inspiration from music, fashion, and classic cinema, Zak
            photograph weddings in the most subtle, intimate, and alluring way
            that adduces the beauty in timeless elegance. Artfully creating
            contemporary, yet classic images that convey the true love stories
            of their couples in a genuine and soulful way.
            <br />
            Renai&apos;s work is highly moving display of moments and details
            that you might otherwise miss, creating memories that you will love
            to return to as you revisit the images over the years.
          </p>
          <button className="text-xs uppercase tracking-[0.25em] underline underline-offset-8">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
