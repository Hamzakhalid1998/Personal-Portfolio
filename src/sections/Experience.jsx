import SectionsHeadings from "../components/SectionsHeadings";
import Card from "../components/Card";

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
    <section id="experience" className=" px-4 w-full">
      <SectionsHeadings
        sectionsHeadings="Experience"
        sectionHeadingColor={sectionHeadingColor}
      />

      <div className="flex flex-col gap-8 w-full mt-8 px-4 mx-auto max-w-5xl">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            title={exp.role}
            subtitle={exp.company}
            subtitleColor={companyNameColor} // dynamic company color
            duration={exp.duration}
            description={
              <ul
                className="list-disc list-inside space-y-2 mt-2"
                style={{ color: experienceTextColor }} // dynamic responsibilities color
              >
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {task}
                  </li>
                ))}
              </ul>
            }
            style={{ border: `2px solid ${cardBorderColor}` }} // dynamic border
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
