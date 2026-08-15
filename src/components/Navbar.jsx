"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsSidebarOpen(false);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = -75;

      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY +
        offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    setIsSidebarOpen(false);
  };

  return (
    <nav className="p-6 flex justify-between items-center sticky top-0 z-50 border-0 text-lg bg-PrimaryBgLight dark:bg-PrimaryBgDark">

      <span
        className="text-left animate-bounce font-semibold"
        onClick={(e) => handleScroll(e, "home")}
      >
        @Aniksha G
      </span>

      {/* Mobile Menu Button */}
      <button
        className="text-2xl md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-right gap-5 items-center font-semibold">

        <li>
          <button onClick={(e) => handleScroll(e, "home")}>
            Home
          </button>
        </li>

        <li>
          <button onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </button>
        </li>

        <li>
          <button onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </button>
        </li>

        <li>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2"
          >
            {mounted && (
              theme === "light" ? (
                <FaMoon className="text-gray-900 text-2xl" />
              ) : (
                <FaSun className="text-yellow-500 text-2xl" />
              )
            )}
          </button>
        </li>

      </ul>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-PrimaryBgLight dark:bg-PrimaryBgDark w-64 z-50 transform ${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        } transition-transform duration-400 ease-in-out shadow-lg`}
      >

        <div className="flex justify-between items-center p-6">

          <span className="text-xl font-bold">
            Menu
          </span>

          <button
            className="text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        <ul className="flex flex-col gap-5 p-6">

          <li>
            <button onClick={(e) => handleScroll(e, "home")}>
              Home
            </button>
          </li>

          <li>
            <button onClick={(e) => handleScroll(e, "projects")}>
              Projects
            </button>
          </li>

          <li>
            <button onClick={(e) => handleScroll(e, "contact")}>
              Contact
            </button>
          </li>

          <li>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              {mounted && (
                theme === "light" ? (
                  <FaMoon className="text-gray-900 text-2xl" />
                ) : (
                  <FaSun className="text-yellow-500 text-2xl" />
                )
              )}
            </button>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;