import React from "react";
import "../CSS/Bryan.css";
import Letter from "./Letter";
import Signature from "./Signature";
import Opening from "./Opening";

function Bryan() {
  const [show, setShow] = React.useState(false);

  return (
    <div className={`container`}>
      <p className={`salutation`}>Dear Bryan</p>
      <Letter isVisible={show} />
      <Opening isHidden={show} handleOnClick={setShow} />
      <Signature />
    </div>
  );
}

export default Bryan;
