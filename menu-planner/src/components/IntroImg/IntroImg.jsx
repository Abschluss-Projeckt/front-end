import React from "react";
import "./IntroImg.scss";
import { Link } from "react-router-dom";
function IntroImg({ title, Srcs, pt }) {
  return (
    <div className="IntroImg" style={{ paddingTop: pt }}>
      <Link className="K-links" to="/recipes">
        <img src={Srcs} alt="." />
        <h5>{title}</h5>
      </Link>
    </div>
  );
}

export default IntroImg;
