import SectionsHeadings from "../components/SectionsHeadings";
import Card from "../components/Card";

const Experience = () => {
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
    // Add more experiences here if needed
  ];

  return (
    <section id="experience" className="w-full flex flex-col items-center ">
      {/* Section Heading */}
      <SectionsHeadings sectionsHeadings="Experience" />

      {/* Experience Cards */}
      <div className="flex flex-col gap-8 w-full mt-8 px-4 max-w-5xl">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            title={exp.role}
            subtitle={exp.company}
            duration={exp.duration}
            description={
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {task}
                  </li>
                ))}
              </ul>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
