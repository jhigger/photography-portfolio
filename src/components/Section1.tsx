/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

const Section1 = () => {
  return (
    <section className="bg-[#ecebe8] py-40 pb-60">
      <div className="container mx-auto flex flex-col items-center justify-center gap-12">
        <h1 className="text-xl font-light uppercase tracking-widest">
          Editorial Wedding Photographer
        </h1>
        <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
          <img
            src="https://placehold.co/800x1200/?text=Image"
            alt="sample"
            className="h-[80%] rounded-xl"
          />
          <img
            src="https://placehold.co/800x1200/?text=Image"
            alt="sample"
            className="rounded-xl"
          />
          <img
            src="https://placehold.co/800x1200/?text=Image"
            alt="sample"
            className="h-[80%] rounded-xl"
          />
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-[700px] text-center text-5xl font-light uppercase leading-tight"
        >
          <Balancer>
            Exquisite Photography <i>For</i> Modern Couples
          </Balancer>
        </motion.span>
      </div>
    </section>
  );
};

export default Section1;
