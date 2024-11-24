import { motion } from "framer-motion";
import {
  RiHtml5Fill,
  RiJavascriptFill,
  RiNodejsFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export default function Technology() {
  // Parent container animation
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Delay between each icon animation
      },
    },
  };

  // Individual wave animation for icons
  const waveVariants = {
    animate: (custom) => ({
      y: [0, -10, 0], // Move up, then down
      transition: {
        duration: 1.5, // Animation duration
        repeat: Infinity, // Loop animation
        ease: "easeInOut",
        delay: custom * 0.2, // Staggered delay
      },
    }),
  };

  return (
    <div className="border-b border-neutral-800 lg:pb-20">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="animate"
        className="flex flex-wrap items-center justify-center gap-4 pb-6"
      >
        <motion.div
          custom={0}
          variants={waveVariants}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Fill className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          custom={1}
          variants={waveVariants}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-600" />
        </motion.div>
        <motion.div
          custom={2}
          variants={waveVariants}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          custom={3}
          variants={waveVariants}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          custom={4}
          variants={waveVariants}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsFill className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          custom={5}
          variants={waveVariants}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
      </motion.div>
    </div>
  );
}
