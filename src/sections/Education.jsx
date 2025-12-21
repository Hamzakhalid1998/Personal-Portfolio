import SectionsHeadings from "../components/SectionsHeadings";
import Card from "../components/Card";

const Education = () => {
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
    <section id="education" className="w-full flex flex-col items-center">
      {/* Section Heading */}
      <SectionsHeadings sectionsHeadings="Education" />

      {/* Education Cards */}
      <div className="flex flex-col gap-8 w-full mt-8 px-4 max-w-5xl">
        {educationList.map((edu, index) => (
          <Card
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            duration={edu.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
