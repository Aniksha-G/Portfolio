import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiBootstrap,
  SiPostgresql,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const iconMap = {
  React: <FaReact size={20} className="text-blue-400" />,
  "React JS": <FaReact size={20} className="text-blue-400" />,
  JavaScript: <FaJsSquare size={20} className="text-yellow-400" />,
  Tailwind: <SiTailwindcss size={20} className="text-teal-400" />,
  "Tailwind CSS": <SiTailwindcss size={20} className="text-teal-400" />,
  Django: <SiDjango size={20} className="text-green-800" />,
  HTML: <FaHtml5 size={20} className="text-orange-500" />,
  CSS: <FaCss3Alt size={20} className="text-blue-500" />,
  Bootstrap: <SiBootstrap size={20} className="text-purple-600" />,
  "Postgres Sql": <SiPostgresql size={20} className="text-blue-600" />,
  PostgreSQL: <SiPostgresql size={20} className="text-blue-600" />,
  "Next.js": <SiNextdotjs size={20} className="text-white" />,
  "Node.js": <FaNodeJs size={20} className="text-green-500" />,
  MongoDB: <SiMongodb size={20} className="text-green-500" />,
};

const ProjectCard2 = ({ title, techStack, link }) => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-2xl rounded-2xl shadow-lg bg-white dark:bg-gray-900 p-6 hover:shadow-xl transition-shadow duration-300">

        {/* Header */}
        <div className="flex flex-col items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 text-center">
            {title}
          </h3>
        </div>

        {/* Tech Stack */}
        {techStack && (
          <div className="flex justify-center flex-wrap gap-3 mt-4">
            {techStack.map((tech, index) =>
              iconMap[tech] ? (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 flex items-center px-3 py-2 rounded-full gap-2 shadow-sm hover:shadow-md transition-all"
                >
                  {iconMap[tech]}

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                </div>
              ) : null
            )}
          </div>
        )}

        {/* GitHub Link */}
        <div className="flex justify-center mt-6">
          {!link ? (
            <span className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold shadow-md">
              Project
            </span>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300"
            >
              <FaGithub className="h-5 w-5" />
              View on GitHub
            </a>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProjectCard2;