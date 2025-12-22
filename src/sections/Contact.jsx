import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionsHeadings from "../components/SectionsHeadings"; // ✅ IMPORT MISSING

const Contact = ({
  sectionHeadingColor,
  textColor,
  linkColor,
  iconColor,
  location,
  locationColor,
}) => {
  return (
    <section
      id="contact"
      className="w-full px-4 flex flex-col items-center justify-center font-sans mb-4"
      style={{ color: textColor }}
    >
      {/* Section Heading */}
      <SectionsHeadings
        sectionsHeadings="Contact"
        sectionHeadingColor={sectionHeadingColor}
      />

      {/* Top Row: Contact Details */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-lg md:text-xl tracking-tight">
        <a
          href="mailto:karankumar8239@gmail.com"
          className="underline underline-offset-4 transition-colors"
          style={{ color: linkColor }}
        >
          hamza_khalid69@yahoo.com
        </a>
        <a
          href="tel:+916350320901"
          className="underline underline-offset-4 transition-colors"
          style={{ color: linkColor }}
        >
          +92-309-7156320
        </a>
        <span
          className="underline underline-offset-4 cursor-default"
          style={{ color: locationColor }}
        >
          {location}
        </span>
      </div>

      {/* Bottom Row: Social Links */}
      <div className="flex items-center justify-center gap-4 text-base md:text-lg">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition-colors"
          style={{ color: iconColor }}
        >
          <FaLinkedin className="text-xl" />
          <span>Linkedin</span>
        </a>

        <span style={{ color: textColor }}>/</span>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition-colors"
          style={{ color: iconColor }}
        >
          <FaGithub className="text-xl" />
          <span>Github</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
