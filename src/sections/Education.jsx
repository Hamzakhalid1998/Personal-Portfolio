import SectionsHeadings from "../components/SectionsHeadings";
import Card from "../components/Card";

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
    <section id="education" className="px-4 w-full">
      {/* Section Heading */}
      <SectionsHeadings
        sectionsHeadings="Education"
        sectionHeadingColor={sectionHeadingColor}
      />

      {/* Education Cards */}
      <div className="flex flex-col mx-auto gap-8 w-full mt-8 px-4 max-w-5xl">
        {educationList.map((edu, index) => (
          <Card
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            subtitleColor={institutionColor} // dynamic institution name color
            duration={edu.duration}
            description={null} // no extra description for education
            style={{ border: `2px solid ${cardBorderColor}` }} // dynamic border
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
