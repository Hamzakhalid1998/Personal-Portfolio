import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionsHeadings from "../components/SectionsHeadings";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 px-4 flex flex-col items-center justify-center text-gray-300 font-sans"
    >
      <SectionsHeadings sectionsHeadings="Contact" />
      {/* Top Row: Contact Details */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-lg md:text-xl tracking-tight">
        <a
          href="mailto:karankumar8239@gmail.com"
          className="underline decoration-gray-500 underline-offset-4 hover:text-white transition-colors"
        >
          hamza_khalid69@yahoo.com
        </a>
        <a
          href="tel:+916350320901"
          className="underline decoration-gray-500 underline-offset-4 hover:text-white transition-colors"
        >
          +92-309-7156320
        </a>
        <span className="underline decoration-gray-500 underline-offset-4 cursor-default">
          Pakistan
        </span>
      </div>

      {/* Bottom Row: Social Links */}
      <div className="flex items-center justify-center gap-4 text-gray-500 text-base md:text-lg">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <FaLinkedin className="text-xl" />
          <span>Linkedin</span>
        </a>

        <span className="text-gray-700">/</span>

        {/* Github */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <FaGithub className="text-xl" />
          <span>Github</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
