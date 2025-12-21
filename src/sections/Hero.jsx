import Logo from "../assets/Logo.jpeg";
import Button from "../components/Button";
import Skills from "./Skills";

const Hero = () => {
  return (
    <section id="home" className="h-auto flex flex-col justify-center">
      <div className="px-4 max-w-6xl mx-auto mt-5 md:mt-10 lg:my-15 flex justify-center flex-col">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-32 mb-10">
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              Hey, I'm Hamza Khalid
            </h1>

            <p className="text-xl md:text-2xl mt-3 text-gray-600 dark:text-gray-300">
              Frontend React Developer • Pakistan
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-400 leading-relaxed">
              Passionate Frontend React Developer with experience building
              modern, responsive web applications, delivering clean, scalable UI
              code, and continuously learning new frontend technologies.
            </p>

            <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start">
              <Button buttonText="Get in Touch" handleClick={() => {}} />
              <Button buttonText="View Resume" handleClick={() => {}} />
            </div>
          </div>

          <div className="h-60 w-60 bg-[#2A2A2A] flex justify-center items-center rounded-full shadow-lg overflow-hidden">
            <img
              src={Logo}
              alt="Portrait of Hamza Khalid"
              className="h-56 w-56 object-cover object-center rounded-full"
            />
          </div>
        </div>

        <Skills />
      </div>
    </section>
  );
};

export default Hero;
