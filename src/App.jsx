import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  // Define themes
  const darkTheme = {
    bg: "#0F172A",
    navbar: "#1E293B",
    heroHeading: "#F8FAFC",
    heroSubHeading: "#60A5FA",
    heroPara: "#CBD5E1",
    sectionHeading: "#FACC15",
    icon: "#60A5FA",
    skillHeading: "#F472B6",
    buttonsColor: "#3B82F6",
    cardBorder: "#334155",
  };

  const lightTheme = {
    bg: "#F1F5F9",
    navbar: "#FFFFFF",
    heroHeading: "#1E293B",
    heroSubHeading: "#2563EB",
    heroPara: "#334155",
    sectionHeading: "#F59E0B",
    icon: "#2563EB",
    skillHeading: "#DB2777",
    buttonsColor: "#3B82F6",
    cardBorder: "#CBD5E1",
  };

  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  const handleThemeToggle = () => setIsDark((prev) => !prev);

  // Define nav links
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className="font-space-grotesk antialiased transition-colors duration-300 min-h-screen w-full flex flex-col items-center pt-8"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Navbar */}
      <Navbar
        navLinks={navLinks}
        handleBgColor={handleThemeToggle}
        navBarBg={theme.navbar}
        navTextColor={theme.heroPara}
        navIconColor={theme.icon}
        isDark={isDark}
      />

      {/* Sections */}
      <Hero
        heroSectionTextColor={theme.heroHeading}
        heroSectionProfessionTextColor={theme.heroSubHeading}
        heroSectionParaTextColor={theme.heroPara}
        skillHeadingColor={theme.skillHeading}
        buttonColor={theme.buttonsColor}
      />

      <About
        sectionHeadingColor={theme.sectionHeading}
        borderColor={theme.cardBorder}
        aboutTextColor={theme.heroPara}
      />

      <Projects sectionHeadingColor={theme.sectionHeading} />

      <Experience
        sectionHeadingColor={theme.sectionHeading}
        experienceTextColor={theme.heroPara}
        cardBorderColor={theme.cardBorder}
        companyNameColor={theme.heroSubHeading}
      />

      <Education
        sectionHeadingColor={theme.sectionHeading}
        cardBorderColor={theme.cardBorder}
        institutionColor={theme.heroSubHeading}
        durationColor={theme.heroPara}
      />

      <Contact
        sectionHeadingColor={theme.sectionHeading}
        textColor={theme.heroPara}
        linkColor={theme.heroSubHeading}
        iconColor={theme.icon}
        location="Pakistan"
        locationColor={theme.heroSubHeading}
      />

      <Footer textColor={theme.heroPara} borderColor={theme.cardBorder} />
    </div>
  );
};

export default App;
