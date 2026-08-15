"use client";

import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

const SocialSidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/aniksha-g-9867ba370/",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/Aniksha-G",
    },
    {
      name: "Email",
      icon: <BiLogoGmail size={24} />,
      url: "mailto:anikshaganeshan@gmail.com",
    },
  ];

  return (
    <aside className="hidden md:flex flex-col gap-1 absolute left-0 top-1/4">
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition-all duration-300 ease-in-out bg-gray-800 text-white hover:bg-opacity-90 p-3 rounded-r-md"
          style={{
            width: hoveredIndex === index ? "150px" : "48px",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center gap-3">
            <div>{link.icon}</div>

            <span
              className="whitespace-nowrap transition-all duration-300"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
              }}
            >
              {link.name}
            </span>
          </div>
        </a>
      ))}
    </aside>
  );
};

export default SocialSidebar;