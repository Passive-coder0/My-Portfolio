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
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full ma-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
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
