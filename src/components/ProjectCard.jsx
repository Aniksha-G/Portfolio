"use client";
import { Dialog, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectPopup from "./ProjectPopup";

function ProjectCard(props) {
  const { title, imgPath, year, techstack, description } = props.data;
  const containerStyle = {
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    transition: "transform 0.5s ease",
  };

  const hoverStyle = {
    transform: "scale(1.1)",
  };

  return (
    <>
      <div className="max-w-xl rounded overflow-hidden shadow-lg border-4 border-borderLight dark:border-borderDark p-4 bg-SecondaryBgLight dark:bg-SecondaryBgDark">
        <div style={containerStyle}>
          <img
            style={imageStyle}
            src={imgPath}
            alt="Sunset in the mountains"
            onMouseEnter={(e) =>
              (e.target.style.transform = hoverStyle.transform)
            }
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
        <div className="py-4 text-left items-start">
          <p>{year}</p>
          <span className="text-3xl mb-2">{title}</span>
          <div className="flex">
            {techstack.map((item, index) => (
              <p
                key={index}
                className="rounded-xl border border-borderLight dark:border-borderDark bg-PrimaryBgLight dark:bg-PrimaryBgDark w-fit p-1 text-sm me-2"
              >
                {item.techstack_title}
              </p>
            ))}
          </div>
          <p className="mt-2">{description}</p>
        </div>
      </div>

      {/* <ProjectPopup data={props.data}/> */}
    </>
  );
}

export default React.memo(ProjectCard);
