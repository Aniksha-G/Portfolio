"use client";
import React from "react";

const ContactForm = ({ formData, handleSubmit, handleChange, status }) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col  ">
      <input
        className="px-2 py-4 m-2 dark:bg-TextFieldDark bg-TextFieldLight"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="px-2 py-4 m-2 dark:bg-TextFieldDark bg-TextFieldLight"
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="px-2 py-4 m-2 dark:bg-TextFieldDark bg-TextFieldLight"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        className="self-start text-PrimaryTextDark dark:text-PrimaryTextLight bg-SecondaryBgDark dark:bg-PrimaryTextDark py-2 px-4 rounded-sm ms-2 mt-2 font-bold"
        type="submit"
      >
        Submit
      </button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
