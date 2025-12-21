const Skills = () => {
  const mySkills = [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <section id="skills" className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>

      <div className="flex flex-wrap gap-4">
        {mySkills.map((skill) => (
          <span
            key={skill}
            className="bg-[#262626] text-sm px-4 py-2 rounded-full text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
