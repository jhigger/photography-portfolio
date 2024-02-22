import Carousel from "./Carousel";

const Section3 = () => {
  return (
    <section className="bg-[#19191a]">
      <div className="flex flex-col items-center justify-center bg-[#e4e2dd] py-28">
        <div className="text-sm uppercase tracking-[0.25em]">
          Discover Our Work
        </div>
        <div className="text-7xl font-light uppercase">Portfolio</div>
      </div>
      <div className="-mt-60 flex flex-col items-center justify-center gap-28 py-40">
        <div className="container mx-auto">
          <Carousel />
        </div>
        <div className="space-y-10 text-center text-white">
          <div className="w-[800px] text-3xl font-light uppercase">
            &quot;I don&apos;t even know how to put into words just how stunning
            and incredible our photos are !&quot;
          </div>
          <div className="text-md uppercase tracking-[0.25em]">
            Rachael, bride from UK
          </div>
        </div>
        <button className="w-max border px-12 py-1 text-xs uppercase tracking-[0.25em] text-white">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default Section3;
