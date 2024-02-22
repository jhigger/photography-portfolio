import Balancer from "react-wrap-balancer";

const Section6 = () => {
  return (
    <section className="bg-[url('https://placehold.co/1280x720/?text=Image')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="container mx-auto flex h-[800px] flex-col items-center justify-center gap-10 text-center uppercase text-white">
        <span className="w-[800px] text-6xl font-light">
          <Balancer>Love is the poetry of the senses.</Balancer>
        </span>
        <span className="text-sm tracking-[0.25em]">- Honore De Balzax</span>
      </div>
    </section>
  );
};

export default Section6;
