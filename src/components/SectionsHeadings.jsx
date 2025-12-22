const SectionsHeadings = ({ sectionsHeadings, sectionHeadingColor }) => {
  return (
    <div className="flex items-center w-full max-w-5xl mx-auto my-8">
      <div className="flex-1 border-t border-gray-300 dark:border-gray-700 h-0.5"></div>

      <h2
        className="font-bold text-xl px-4 text-center"
        style={{ color: sectionHeadingColor }}
      >
        {sectionsHeadings}
      </h2>

      <div className="flex-1 border-t border-gray-300 dark:border-gray-700 h-0.5"></div>
    </div>
  );
};

export default SectionsHeadings;
