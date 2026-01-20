import SectionsHeadings from "../components/SectionsHeadings";
import Card from "../components/Card";
import { motion } from "framer-motion";

const Education = ({
  sectionHeadingColor,
  cardBorderColor,
  institutionColor,
  durationColor,
}) => {
  const educationList = [
    {
      degree: "BS in Information Technology",
      duration: "2021 - 2023",
      institution: "Islamia University of Bahawalpur",
    },
    {
      degree: "BSc in Computer Science",
      duration: "2018 - 2020",
      institution: "Millat Group of Colleges",
    },
  ];

  return (
    <section id="education" className="px-4 w-full overflow-hidden">
      {/* Section Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionsHeadings
          sectionsHeadings="Education"
          sectionHeadingColor={sectionHeadingColor}
        />
      </motion.div>

      {/* Education Cards */}
      <motion.div
        className="flex flex-col mx-auto gap-8 w-full mt-8 px-4 max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card
              title={edu.degree}
              subtitle={edu.institution}
              subtitleColor={institutionColor}
              duration={edu.duration}
              description={null}
              style={{ border: `2px solid ${cardBorderColor}` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
