import { useState, useEffect } from "react";
import Logo from "../assets/Logo.jpeg";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = ({
  navLinks,
  handleBgColor,
  navBarBg,
  navTextColor,
  navIconColor,
  isDark,
}) => {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history)
      window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    window.history.replaceState(null, "", "#home");
    setActiveLink("home");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let currentSection = navLinks[0].id;

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            currentSection = navLinks[i].id;
            break;
          }
        }
      }

      // Last section at bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        currentSection = navLinks[navLinks.length - 1].id;
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleNavClick = (e, linkId) => {
    e.preventDefault();
    const section = document.getElementById(linkId);
    if (section) {
      const navbarHeight = 90;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    window.history.replaceState(null, "", `#${linkId}`);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 w-full md:mb-0 mb-10">
      {/* Desktop Navbar */}
      <div
        className="hidden md:flex items-center justify-between gap-4 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 max-w-4xl w-full mx-auto"
        style={{ backgroundColor: navBarBg, color: navTextColor }}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Home"
        >
          <img
            src={Logo}
            alt="Portrait"
            className="rounded-full h-12 w-12 object-cover border-2 border-white shadow-lg"
          />
        </a>

        <NavLinks
          navLinks={navLinks}
          activeLink={activeLink}
          handleNavClick={handleNavClick}
        />

        {isDark ? (
          <MdOutlineLightMode
            className="text-2xl cursor-pointer"
            style={{ color: navIconColor }}
            onClick={handleBgColor}
          />
        ) : (
          <MdOutlineDarkMode
            className="text-2xl cursor-pointer"
            style={{ color: navIconColor }}
            onClick={handleBgColor}
          />
        )}
      </div>

      {/* Mobile Navbar */}
      <div
        className="flex md:hidden items-center justify-between px-4 py-3 rounded-full shadow-lg mx-4"
        style={{ backgroundColor: navBarBg, color: navTextColor }}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Home"
        >
          <img
            src={Logo}
            alt="Portrait"
            className="rounded-full h-10 w-10 object-cover border-2 border-white shadow-lg"
          />
        </a>

        <div className="flex items-center gap-4">
          {isDark ? (
            <MdOutlineLightMode
              className="text-2xl cursor-pointer"
              style={{ color: navIconColor }}
              onClick={handleBgColor}
            />
          ) : (
            <MdOutlineDarkMode
              className="text-2xl cursor-pointer"
              style={{ color: navIconColor }}
              onClick={handleBgColor}
            />
          )}

          <GiHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden rounded-lg shadow-lg mt-2 mx-4 p-4 flex flex-col gap-3 absolute min-w-md"
          style={{ backgroundColor: navBarBg, color: navTextColor }}
        >
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
