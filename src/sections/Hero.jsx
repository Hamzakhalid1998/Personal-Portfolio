import Logo from "../assets/Logo.jpeg";
import Button from "../components/Button";
import Skills from "./Skills";
import { motion } from "framer-motion";

const Hero = ({
  heroSectionTextColor,
  heroSectionProfessionTextColor,
  heroSectionParaTextColor,
  skillHeadingColor,
  buttonColor,
}) => {
  return (
    <section
      id="home"
      className="h-auto flex flex-col justify-center overflow-hidden"
    >
      <div className="px-4 max-w-6xl mx-auto mt-5 md:mt-10 lg:my-15 flex justify-center flex-col">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-32 mb-10">
          {/* 🔥 LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left max-w-xl"
          >
            <h1
              className="text-4xl lg:text-5xl font-extrabold"
              style={{ color: heroSectionTextColor }}
            >
              Hey, I'm Hamza Khalid
            </h1>

            <p
              className="text-xl md:text-2xl mt-3"
              style={{ color: heroSectionProfessionTextColor }}
            >
              Frontend React Developer • Pakistan
            </p>

            <p
              className="mt-6 leading-relaxed"
              style={{ color: heroSectionParaTextColor }}
            >
              Passionate Frontend React Developer with experience building
              modern, responsive web applications, delivering clean, scalable UI
              code, and continuously learning new frontend technologies.
            </p>

            <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start">
              <Button
                buttonText="Get in Touch"
                handleClick={() => {}}
                buttonColor={buttonColor}
              />
              <Button
                buttonText="View Resume"
                handleClick={() => {}}
                buttonColor={buttonColor}
              />
            </div>
          </motion.div>

          {/* 🔥 RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="h-60 w-60 bg-[#2A2A2A] flex justify-center items-center rounded-full shadow-lg overflow-hidden"
          >
            <img
              src={Logo}
              alt="Portrait of Hamza Khalid"
              className="h-56 w-56 object-cover object-center rounded-full"
            />
          </motion.div>
        </div>

        {/* 🔥 SKILLS ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Skills skillHeadingColor={skillHeadingColor} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
