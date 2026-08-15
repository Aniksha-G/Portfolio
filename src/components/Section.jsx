import React from "react";

import TypingEffect from "../components/TypingEffect";

function Section(props) {
  return (
    <>
      <hr className="mb" />
      <div className="py-5 grid grid-cols-1 md:grid-cols-2" id={props.id}>
        <div className="w-1/2">
          {props.title ? (
            <TypingEffect
              className="m-0 sticky-title"
              tag="h2"
              typingSpeed={50}
            >
              {props.title}
            </TypingEffect>
          ) : null}
        </div>
        <div className="">{props.children}</div>
      </div>
    </>
  );
}

export default Section;
