import React from "react";

const NavLinks = ({ navLinks, activeLink, handleNavClick }) => {
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => handleNavClick(e, link.id)}
          className={`px-3 py-2 rounded-full transition-colors duration-300 ${
            activeLink === link.id
              ? "bg-[#404040] text-white"
              : "hover:bg-[#404040] dark:hover:bg-[#404040] hover:text-white"
          }`}
          aria-current={activeLink === link.id ? "page" : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
