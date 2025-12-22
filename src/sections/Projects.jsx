import React from "react";
import SectionsHeadings from "../components/SectionsHeadings";

const Projects = ({ sectionHeadingColor }) => {
  return (
    <section className="h-screen px-4 w-full" id="projects">
      <SectionsHeadings
        sectionsHeadings="Projects"
        sectionHeadingColor={sectionHeadingColor}
      />
    </section>
  );
};

export default Projects;
