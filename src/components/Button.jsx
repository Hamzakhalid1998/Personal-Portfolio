const Button = ({ buttonText, handleClick }) => {
  return (
    <button
      className="border w-40 border-[rgba(82,82,82,1)] px-6 py-2 rounded-lg cursor-pointer hover:bg-[#404040]/30"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
