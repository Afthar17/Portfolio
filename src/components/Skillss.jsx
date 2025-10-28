import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiGit,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
  SiMui,
  SiRedux,
  SiPostman,
  SiJsonwebtokens,
  SiMqtt,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import bg_frontend from "../assets/skills.jpg";
import backend from "../assets/backend.jpg";
import zustand from "../assets/logo512.png";

const skills = [
  {
    category: "Frontend",
    image: bg_frontend,
    technologies: [
      {
        name: "HTML",
        icon: <DiHtml5 className="text-orange-600 text-4xl md:text-5xl" />,
      },
      {
        name: "CSS",
        icon: <DiCss3 className="text-blue-600 text-4xl md:text-5xl" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-blue-600 text-4xl md:text-5xl" />,
      },
      {
        name: "JavaScript",
        icon: (
          <DiJavascript1 className="text-yellow-600 text-4xl md:text-5xl" />
        ),
      },
      {
        name: "React JS",
        icon: <DiReact className="text-blue-500 text-4xl md:text-5xl" />,
      },
      {
        name: "Next js",
        icon: <SiNextdotjs className="text-white text-4xl md:text-5xl" />,
      },
      {
        name: "Material UI",
        icon: <SiMui className="text-blue-600 text-4xl md:text-5xl" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-600 text-4xl md:text-5xl" />,
      },
      {
        name: "Zustand",
        icon: <img src={zustand} className="w-10 h-10 md:w-14 md:h-14" />,
      },
      {
        name: "Framer Motion",
        icon: (
          <TbBrandFramerMotion className="text-purple-600 text-4xl md:text-5xl" />
        ),
      },
    ],
  },
  {
    category: "Backend",
    image: backend,
    technologies: [
      {
        name: "Node JS",
        icon: <DiNodejsSmall className="text-green-500 text-4xl md:text-5xl" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-500 text-4xl md:text-5xl" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="text-green-600 text-4xl md:text-5xl" />,
      },
      {
        name: "Git",
        icon: <DiGit className="text-orange-700 text-4xl md:text-5xl" />,
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio className="text-gray-500 text-4xl md:text-5xl" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-600 text-4xl md:text-5xl" />,
      },
      {
        name: "JWT",
        icon: (
          <SiJsonwebtokens className="text-pink-700 text-4xl md:text-5xl" />
        ),
      },
      {
        name: "MQTT",
        icon: <SiMqtt className="text-purple-700/50 text-4xl md:text-5xl" />,
      },
    ],
  },
];

const Skillss = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftMotion = {
    initial: { opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 50 : 0 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
    viewport: { once: true },
  };

  const rightMotion = {
    initial: { opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 50 : 0 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
    viewport: { once: true },
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-2 md:py-8  text-gray-200 overflow-x-hidden"
      id="skills"
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-bold text-4xl md:text-5xl mb-8 text-gradient text-center"
      >
        My Skills Set
      </motion.h2>

      <p className="text-center mb-6 text-lg font-semibold text-gray-200">
        From frontend polish to backend logic — here’s what powers my
        development process.{" "}
        <a className="cursor-pointer" href="#projects">
          <span className="font-semibold text-gradient">
            view my projects →
          </span>
        </a>
      </p>

      <div className="flex flex-col items-center gap-5 w-full mb-4">
        {skills.flatMap((skill) => (
          <div
            key={skill.category}
            className="bg-[#230C33] text-[#F2EFE9] flex flex-col md:flex-row relative w-[90%] md:w-[80%] max-w-[1000px] items-center justify-between border border-slate-600 rounded-xl p-4 overflow-hidden"
          >
            {/* Left side content */}
            <motion.div
              {...leftMotion}
              className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {skill.category}
              </h2>
              <div className="grid grid-cols-2 gap-5">
                {skill.technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3">
                    {tech.icon}
                    <p className="text-sm md:text-base font-semibold">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side image */}
            <motion.img
              {...rightMotion}
              src={skill.image}
              alt={skill.category}
              className="hidden md:block w-1/2 h-full max-h-[450px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillss;
