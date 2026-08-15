"use client";

import { useState, useCallback } from "react";
import ContactForm2 from "@/components/ContactForm2";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await fetch(
        "https://formspree.io/f/mljrnajl",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Success! Your message has been sent.");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Error! Please try again later.");
      }
    },
    [formData]
  );

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 bg-cardbglight text-PrimaryBgLight p-5 sm:w-4/5 rounded-lg mx-4 sm:mx-auto">

      <aside className="flex flex-col items-start p-3">
        <h2 className="mb-4">Let's Connect!</h2>

        <p className="text-lg mb-6 dark:text-[#3ccf91]">
          Feel free to reach out and share your experience with my portfolio!
          I'd love to hear your feedback and thoughts on how you liked it.
        </p>

        <div className="space-y-4 mb-8">

          <div className="flex items-center">
            <span className="mr-4">📧</span>
            <span>anikshaganeshan@gmail.com</span>
          </div>

          <div className="flex items-center">
            <span className="mr-4">📞</span>
            <span>+91-9080432142</span>
          </div>

          <div className="flex items-center">
            <span className="mr-4">📍</span>
            <span>Mysore, India</span>
          </div>

        </div>

        <div className="flex space-x-6 text-2xl">

          <a
            href="https://www.linkedin.com/in/aniksha-g-9867ba370/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Aniksha-G"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>

        </div>
      </aside>

      <div className="py-2 sm:py-3">
        <ContactForm2
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          status={status}
        />

        {status && (
          <p className="mt-4 text-center text-purple-700">
            {status}
          </p>
        )}
      </div>

    </section>
  );
};

export default Contact;