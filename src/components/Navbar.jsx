import { useState, useEffect } from "react";
import Logo from "../assets/Logo.jpeg";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll restoration & initial setup
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    window.history.replaceState(null, "", "#home");
    setActiveLink("home");
  }, []);

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(link.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, linkId) => {
    e.preventDefault();
    setActiveLink(linkId);

    const section = document.getElementById(linkId);
    if (section) {
      const navbarHeight = 90;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    window.history.replaceState(null, "", `#${linkId}`);
    setMobileMenuOpen(false); // close mobile menu on click
  };

  return (
    <header className="sticky top-4 z-50 w-full md:mb-0 mb-10">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between gap-4 bg-white/70 dark:bg-[#222223] backdrop-blur-sm shadow-lg rounded-full px-6 py-3 max-w-4xl w-full mx-auto">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Home"
        >
          <img
            src={Logo}
            alt="Portrait of Hamza Khalid"
            className="rounded-full h-12 w-12 object-cover border-2 border-white shadow-lg"
          />
        </a>

        <NavLinks
          navLinks={navLinks}
          activeLink={activeLink}
          handleNavClick={handleNavClick}
        />

        <MdOutlineDarkMode className="text-2xl cursor-pointer" />
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 bg-[#222223] rounded-full shadow-lg mx-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Home"
        >
          <img
            src={Logo}
            alt="Portrait of Hamza Khalid"
            className="rounded-full h-10 w-10 object-cover border-2 border-white shadow-lg"
          />
        </a>

        <div className="flex items-center gap-4">
          <MdOutlineDarkMode className="text-2xl cursor-pointer" />
          <GiHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#222223] rounded-lg shadow-lg mt-2 mx-4 p-4 flex flex-col gap-3 absolute min-w-md">
          <NavLinks
            navLinks={navLinks}
            activeLink={activeLink}
            handleNavClick={handleNavClick}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
