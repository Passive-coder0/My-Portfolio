import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import aboutimg from "/about.jpg";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-netral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutimg} alt="About Me" />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInUp}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="whitespace-pre-line text-base leading-relaxed font-sans my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
