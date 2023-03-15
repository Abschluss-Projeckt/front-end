import React from "react";
import "./IntroImg.scss";
function IntroImg({ title, Srcs, pt }) {
  return (
    <div className="IntroImg" style={{ paddingTop: pt }}>
      <a className="K-links" href="/recipes" alt="ref">
        <img src={Srcs} alt="." />
        <h5>{title}</h5>
      </a>
    </div>
  );
}

export default IntroImg;
