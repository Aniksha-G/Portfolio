import React from "react";
import TypingEffect from "../components/TypingEffect";
import { Dialog } from "@mui/material";

function ProjectPopup(props) {
  const { imgPath, title, description, repoLink, demoLink } = props.data;

  return (
    <Dialog>
      <div className="modal-content">
        <div className="row">
          <div className="col-md-6">
            <img
              src={imgPath}
              className="modal-img display-img-border"
              alt=""
            />
          </div>

          <div className="col-md-6">
            <TypingEffect tag="h2" className={"my-2"} typingSpeed={30}>
              {title}
            </TypingEffect>

            <p>{description}</p>

            <div className="badge-container">
              <a href={repoLink} target="_blank" className="link text-large">
                <i className="bi bi-github"></i> Repo
              </a>
              {demoLink && (
                <a href={demoLink} target="_blank" className="link text-large">
                  <i className="bi bi-globe2"></i> Live demo
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="row mt-3">
          {tabs.screenshots.map((screenshot, index) => (
            <figure key={index} className="col-md-6 mb-4">
              <img src={screenshot.img} className="modal-img mb-2" alt="" />
              <figcaption>
                <strong>{screenshot.title}</strong> {screenshot.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Dialog>
  );
}

export default ProjectPopup;
