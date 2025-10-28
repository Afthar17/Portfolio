import { motion } from "framer-motion";
import education from "../assets/education.jpg";
import Experiences from "../assets/experience.jpg";
import { useEffect, useState } from "react";

const experiences = [
  {
    institution: "Mar Athanasius college of Engineering Kothamangalam",
    Period: "2022-25",
    description: "Btech graduate in electronics and communication",
  },
  {
    institution: "Govt.Polytechnic college Perumbavoor",
    Period: "2019-22",
    description:
      "Passed Diploma in Electronics and Communication with a cgpa of 8.31 ",
  },
  {
    institution: "JHSS Thandekkad",
    Period: "2017-19",
    description: "Passed +2 Biomaths",
  },
  {
    institution: "JHSS Thandekkad",
    Period: "2016-17",
    description: "Passed SSLC with a mark of 96%",
  },
];

const workExperience = [
  {
    institution: "Talks and Talks",
    Period: "Feb 25 - Aug 25",
    Role: "Frontend developer Intern",
    description:
      "During my 6-month internship, I worked on developing and optimizing responsive, user-friendly web interfaces using ReactJS.I also learned about component-based architecture, state management using tools like Redux or Zustand, API integration, and debugging. ",
  },
];

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Define motion variants (horizontal on desktop, vertical on mobile)
  const leftMotion = {
    initial: { opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
    viewport: { once: true },
  };

  const rightMotion = {
    initial: { opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 50 : 0 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
    viewport: { once: true },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full my-10 px-4 md:px-10 overflow-x-hidden">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gradient text-center mt-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Academics and Experience
      </motion.h1>

      {/* --- Academics Section --- */}
      <div className="flex flex-col md:flex-row text-[#252627] w-full max-w-6xl mt-10">
        {/* Left side image */}
        <motion.div
          {...leftMotion}
          className="hidden md:flex w-1/2 items-center justify-center"
        >
          <img
            src={education}
            alt="Education"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </motion.div>

        {/* Right side content */}
        <motion.div
          {...rightMotion}
          className="flex flex-col w-full md:w-1/2 bg-[#BFB48F] p-4 rounded-xl md:rounded-l-none md:rounded-r-xl"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Academics
          </h3>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center gap-2">
                <h2 className="text-lg font-bold">{exp.institution}</h2>
                <p className="text-sm font-semibold whitespace-nowrap text-right">
                  {exp.Period}
                </p>
              </div>
              <p className="text-sm font-medium mt-1">{exp.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- Work Experience Section --- */}
      <div className="flex flex-col md:flex-row text-[#F2EFE9] w-full max-w-6xl mt-10 mb-3">
        {/* Left side content */}
        <motion.div
          {...leftMotion}
          className="flex flex-col w-full md:w-1/2 bg-[#242038] p-4 rounded-xl md:rounded-l-xl md:rounded-r-none"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Experience
          </h3>
          {workExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center gap-2">
                <h2 className="text-lg font-bold">{exp.institution}</h2>
                <p className="text-sm font-semibold whitespace-nowrap text-right">
                  {exp.Period}
                </p>
              </div>
              <p className="text-sm font-medium mt-1">
                <span className="font-semibold">Role:</span> {exp.Role}
              </p>
              <p className="text-sm font-medium mt-1">{exp.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Right side image */}
        <motion.div
          {...rightMotion}
          className="hidden md:flex w-1/2 items-center justify-center"
        >
          <img
            src={Experiences}
            alt="Experience"
            className="w-full h-full object-cover rounded-r-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
