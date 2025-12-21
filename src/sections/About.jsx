import React from "react";
import Logo from "../assets/Logo.jpeg";
import SectionsHeadings from "../components/SectionsHeadings";

const About = () => {
  return (
    <section id="about" className="w-full px-4 flex flex-col">
      {/* Section Heading */}
      <SectionsHeadings sectionsHeadings="About" />

      {/* About Content */}
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-5xl p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Profile Image */}
            <div className="shrink-0">
              <img
                src={Logo}
                alt="Hamza Khalid"
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="text-gray-700 dark:text-gray-300 text-center md:text-left flex-1 space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                Hello, my name is{" "}
                <span className="font-semibold">Hamza Khalid</span>, and I enjoy
                creating things online. My passion for web development began in
                2025 when I decided to learn how to build websites and web
                applications.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                In 2025, I completed an intensive 8-month web development course
                to strengthen my skills in front-end development, focusing on
                React.js, JavaScript, and responsive design.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                After completing the course, I joined Intellix Soft Software
                House as a Frontend Web Developer, where I worked on building
                accessible, responsive, and interactive web applications,
                collaborating closely with designers and backend developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
