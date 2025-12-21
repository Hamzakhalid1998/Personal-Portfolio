import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="bg-white dark:bg-[#18181b] dark:text-white font-space-grotesk antialiased transition-colors duration-300 min-h-screen w-full flex flex-col items-center pt-8">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
