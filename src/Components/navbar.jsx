import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const h1Variants = {
    hover: {
      scale: 1.2, // Slight scaling effect
      textShadow: "0px 0px 8px rgb(255, 255, 255)", // Glow effect
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="lg:mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Add motion.div for animation */}
        <motion.h1
          className="lg:mx-14 text-5xl text-white cursor-pointer"
          variants={h1Variants}
          whileHover="hover"
        >
          Mh
        </motion.h1>
      </div>
      <div className="my-8 lg:mx-14 flex items-center justify-center gap-5 text-3xl">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohamedhamed123/"
          className="inline-flex items-center justify-center text-white p-2 text-2xl rounded-full bg-blue-900 transition-transform duration-500 ease-in-out transform hover:rotate-[360deg] hover:scale-110 hover:drop-shadow-[0_0_10px_rgb(50,120,225)]"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href="https://github.com/Passive-coder0"
          className="text-3xl bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 text-white p-1 rounded-full transition-transform duration-500 ease-in-out transform hover:rotate-[360deg] hover:scale-110 hover:drop-shadow-[0_0_10px_rgb(128,55,207)]"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/"
          className="bg-blue-700 text-4xl rounded-full transition-transform duration-500 ease-in-out transform hover:rotate-[360deg] hover:scale-110 hover:drop-shadow-[0_0_10px_rgb(52,120,226)]"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
}
