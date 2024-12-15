import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

export default function Projects() {
  const fadeIn = {
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
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="m-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 20px rgba(72, 61, 139, 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <motion.h6
                  className="mb-2 font-semibold"
                  whileHover={{
                    scale: 1.1,
                    color: "#8A2BE2", // Changes to a vibrant color on hover
                    textShadow: "0px 0px 10px rgba(138, 43, 226, 0.8)", // Adds a glowing effect
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {project.title}
                </motion.h6>
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
