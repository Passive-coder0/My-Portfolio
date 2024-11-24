import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "/kevinRushProfile.jpg";

export default function Hero() {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Mohamed Hamed
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Junior Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          variants={fadeInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <img src={profilePic} alt="Profile Picture" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
