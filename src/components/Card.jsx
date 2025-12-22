const Card = ({
  title,
  subtitle,
  subtitleColor,
  duration,
  description,
  style,
}) => {
  return (
    <div
      className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
      style={style} // dynamic border color
    >
      <h3 style={{ color: subtitleColor }} className="text-lg font-bold">
        {title}
      </h3>
      <h4
        className="text-md font-semibold"
        style={{ color: subtitleColor }} // company name
      >
        {subtitle}
      </h4>
      <span className="text-sm" style={{ color: subtitleColor }}>
        {duration}
      </span>
      <div>{description}</div> {/* description handles its own color */}
    </div>
  );
};

export default Card;
