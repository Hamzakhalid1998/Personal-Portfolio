import React from "react";

const Footer = ({ textColor, borderColor }) => {
  return (
    <footer
      className="w-full py-6 flex items-center justify-center"
      style={{ borderTop: `1px solid ${borderColor}` }}
    >
      <p
        className="text-sm md:text-base font-light tracking-wide"
        style={{ color: textColor }}
      >
        © 2025 Hamza Khalid. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
