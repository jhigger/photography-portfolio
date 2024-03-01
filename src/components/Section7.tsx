/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const Section7 = () => {
  return (
    <section className="bg-[#19191a]">
      <div className="container mx-auto grid grid-cols-1 gap-28 pb-80 pt-20 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          src="https://placehold.co/400x600/?text=Image"
          alt="sample"
          className="h-[600px] w-[400px] place-self-end rounded-xl bg-cover"
        />
        <div className="flex h-full flex-col justify-center gap-10 place-self-start text-white">
          <div className="text-sm uppercase tracking-[0.25em]">
            Warmest Words From
          </div>
          <div className="text-5xl font-light uppercase tracking-wide">
            Filipa & Dries
          </div>
          <div className="text-2xl font-light uppercase">
            &quot;They are amazing&quot;
          </div>
          <div className="mt-4 w-[390px] font-light leading-loose">
            Thank you so much Zak for these. They are AMAZING! We absolutely
            love them and cannot wait to share them with friends and family.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
