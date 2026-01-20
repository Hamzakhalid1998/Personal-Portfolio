import SectionsHeadings from "../components/SectionsHeadings";
import Card from "../components/Card";
import { motion } from "framer-motion";

const Experience = ({
  sectionHeadingColor,
  experienceTextColor,
  cardBorderColor,
  companyNameColor,
}) => {
  const experiences = [
    {
      company: "Inteelix Soft Software House",
      role: "Frontend Web Developer",
      duration: "2024 - 2025",
      responsibilities: [
        "Developed responsive and interactive web applications using React.js and Tailwind CSS.",
        "Implemented dynamic UI components and reusable code modules.",
        "Integrated REST APIs and managed application state effectively.",
        "Collaborated with designers to convert Figma/PSD designs into functional websites.",
        "Ensured cross-browser and mobile responsiveness across all projects.",
        "Used Git & GitHub for version control and collaborative development.",
      ],
    },
  ];

  return (
    <section id="experience" className="px-4 w-full overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionsHeadings
          sectionsHeadings="Experience"
          sectionHeadingColor={sectionHeadingColor}
        />
      </motion.div>

      {/* Experience Cards */}
      <motion.div
        className="flex flex-col gap-8 w-full mt-8 px-4 mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card
              title={exp.role}
              subtitle={exp.company}
              subtitleColor={companyNameColor}
              duration={exp.duration}
              description={
                <motion.ul
                  className="list-disc list-inside space-y-2 mt-2"
                  style={{ color: experienceTextColor }}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {exp.responsibilities.map((task, idx) => (
                    <motion.li
                      key={idx}
                      className="leading-relaxed"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      {task}
                    </motion.li>
                  ))}
                </motion.ul>
              }
              style={{ border: `2px solid ${cardBorderColor}` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
