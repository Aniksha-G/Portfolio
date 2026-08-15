import React from "react";

const ContactForm2 = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-black">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full p-3 bg-white border-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            className="w-full p-3 bg-white border-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            className="w-full p-3 bg-white border-2"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            className="w-full p-3 h-32 bg-white border-2"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 text-white bg-black rounded-lg focus:outline-none focus:ring focus:ring-[#53f478]"
          >
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-4.586 4.586a1 1 0 01-1.414 0l-4.586-4.586M20.485 6.344a1.5 1.5 0 00-2.121 0L12 12.707 5.636 6.344a1.5 1.5 0 00-2.121 2.121l7.071 7.071a3 3 0 004.242 0l7.071-7.071a1.5 1.5 0 000-2.121z"
                />
              </svg>
              Send Message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo (ContactForm2);
