import React from "react";
import "../CSS/Opening.css";

function Opening({ isHidden, handleOnClick }) {
  return (
    <div className={`fixed ${isHidden ? "hidden" : "visible"}`}>
      <p>Good morning Bryan, </p>
      <p>
        I appreciate your time and attention to the enclosed letter. Please read
        it thoroughly, and I would be grateful if you could address any
        questions posed. I would also genuinely value any feedback and welcome
        any inquiries you may have.
      </p>
      <div className="exit" onClick={handleOnClick}>
        <p>close</p>
      </div>
    </div>
  );
}

export default Opening;
