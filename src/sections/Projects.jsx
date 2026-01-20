import React, { useEffect, useState } from "react";
import SectionsHeadings from "../components/SectionsHeadings";
import { motion } from "framer-motion";
import axios from "axios";

const Projects = ({ sectionHeadingColor, isDark }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/data/projects.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      id="projects"
      className="px-30 mx-10 max-w-7xl flex flex-col justify-center overflow-hidden"
    >
      {/* Section Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionsHeadings
          sectionsHeadings="Projects"
          sectionHeadingColor={sectionHeadingColor}
        />
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.map((project) => (
          <motion.div
            key={project.id}
            className={`rounded-2xl shadow-lg border overflow-hidden max-w-7xl ${
              isDark
                ? "bg-[#0b1020] border-gray-800 text-gray-200"
                : "bg-white border-gray-200 text-gray-900"
            }`}
            variants={card}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 25px 60px rgba(0,0,0,0.20)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-2xl bg-gray-100">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 md:h-48 lg:h-52 object-contain object-center p-3"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-xs mt-1">
                    {project.techStack.join(" • ")}
                  </p>
                </div>

                <span className="text-sm">#{project.id}</span>
              </div>

              <p className="text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="border-t pt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark
                          ? "bg-gray-800 text-gray-200"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-2">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 text-center px-4 py-2 rounded-xl border ${
                      isDark
                        ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    } transition`}
                    whileHover={{ scale: 1.02 }}
                  >
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 text-center px-4 py-2 rounded-xl border ${
                      isDark
                        ? "border-gray-700 text-gray-200 hover:bg-gray-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    } transition`}
                    whileHover={{ scale: 1.02 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
