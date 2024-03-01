/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto grid grid-cols-5 place-items-center gap-10 gap-x-80 pb-20 pt-44">
        <div className="col-span-1 col-start-1 row-span-6 row-start-3 mr-20 h-[500px] w-[350px]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x600/?text=Image"
            alt="sample"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="col-span-1 col-start-2 row-span-5 row-start-2 h-[350px] w-[250px]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x600/?text=Image"
            alt="sample"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-span-1 col-start-3 row-span-2 row-start-1 h-[163px] w-[250px]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x300/?text=Image"
            alt="sample"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-span-1 col-start-4 row-span-5 row-start-2 h-[350px] w-[250px]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x600/?text=Image"
            alt="sample"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="col-span-1 col-start-3 row-span-3 row-start-3 flex w-[250px] flex-col items-center justify-center gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.25em]">
            Recommended By
          </span>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x100/?text=Image"
            alt="sample"
            className="h-[100px] w-[250px] rounded-xl object-cover"
          />
        </div>
        <div className="col-span-1 col-start-3 row-span-2 row-start-6 w-[250px] text-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x100/?text=Image"
            alt="sample"
            className="h-[100px] w-[250px] rounded-xl object-cover"
          />
        </div>

        <div className="col-span-1 col-start-2 row-span-3 row-start-7 h-[163px] w-[250px]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x300/?text=Image"
            alt="sample"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-span-1 col-start-3 row-span-5 row-start-8 h-[350px] w-[250px]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x600/?text=Image"
            alt="sample"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-span-1 col-start-4 row-span-3 row-start-7 h-[163px] w-[250px]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x300/?text=Image"
            alt="sample"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="col-span-1 col-start-5 row-span-6 row-start-3 ml-20 h-[500px] w-[350px]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            src="https://placehold.co/400x600/?text=Image"
            alt="sample"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
