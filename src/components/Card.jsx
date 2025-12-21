const Card = ({ title, subtitle, duration, description, children }) => {
  return (
    <div className="p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 mt-1 md:mt-2 font-medium">
          {subtitle}
        </p>
      )}
      {duration && (
        <p className="text-gray-500 dark:text-gray-400 mt-1 md:mt-2">
          {duration}
        </p>
      )}
      {description && (
        <p className="text-gray-700 dark:text-gray-300 mt-3">{description}</p>
      )}
      {children}
    </div>
  );
};

export default Card;
