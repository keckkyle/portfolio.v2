import React from "react";
import "../CSS/Opening.css";

function Opening({ isHidden, handleOnClick }) {
  let [greeting, setGreeting] = React.useState("Good Morning");

  React.useEffect(() => {
    const date = new Date();
    if (date.getHours() >= 12 && date.getHours() < 18) {
      setGreeting("Good Afternoon");
    } else if (
      (date.getHours() >= 18 && date.getHours() < 24) ||
      date.getHours() < 2
    ) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Morning");
    }
  }, []);

  return (
    <div className={`fixed ${isHidden ? "hidden" : "visible"}`}>
      <p>{greeting} Bryan, </p>
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
