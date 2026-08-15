import TypingEffect from "@/components/TypingEffect";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";

const TechStackCard = () => {
  const techStack = [
    {
      name: "C",
      icon: <span className="font-bold text-blue-500">C</span>,
    },
    {
      name: "Java",
      icon: <FaJava className="text-red-600" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-yellow-400" />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-600" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-500" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-orange-600" />,
    },
  ];

  return (
    <div className="bg-cardbglight text-white py-10 rounded-lg m-5 md:m-16">
      <TypingEffect tag="h2" className="my-5 font-bold text-center h-10">
        My TechStack
      </TypingEffect>

      <div className="flex flex-wrap justify-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-5 hover:scale-105 transform transition"
          >
            <div className="text-4xl">{tech.icon}</div>
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;