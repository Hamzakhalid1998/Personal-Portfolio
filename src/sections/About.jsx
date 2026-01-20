import React from "react";
import Logo from "../assets/Logo.jpeg";
import SectionsHeadings from "../components/SectionsHeadings";
import { motion } from "framer-motion";

const About = ({
  sectionHeadingColors,
  sectionHeadingColor,
  borderColor,
  aboutTextColor,
}) => {
  return (
    <section id="about" className="w-full px-4 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionsHeadings
          sectionsHeadings="About"
          sectionHeadingColor={sectionHeadingColor}
        />
      </motion.div>

      {/* About Content */}
      <div className="flex justify-center mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-5xl p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          style={{ border: `2px solid ${borderColor}` }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="shrink-0"
            >
              <img
                src={Logo}
                alt="Hamza Khalid"
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center md:text-left flex-1 space-y-4"
              style={{ color: aboutTextColor }}
            >
              <p className="text-lg md:text-xl leading-relaxed">
                Hello, my name is
                <span className="font-semibold"> Hamza Khalid</span>, a Frontend
                Web Developer with 3 years of experience building modern and
                responsive web applications. I specialize in creating clean,
                user-friendly interfaces using React.js, JavaScript, and
                Tailwind CSS, with a strong focus on performance and
                accessibility.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                My journey in web development began in January 2023, and since
                then I have worked on multiple real-world projects that helped
                me sharpen my skills in frontend development and responsive
                design.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                I enjoy turning ideas into real products and building digital
                experiences that solve real problems. I’m passionate about
                learning new technologies and continuously improving my skills
                through hands-on development work.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
