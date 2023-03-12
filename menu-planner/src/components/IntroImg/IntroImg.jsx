import React from "react";
import "./IntroImg.scss";
function IntroImg({ Srcs, pt }) {
  return (
    <div className="IntroImg" style={{ paddingTop: pt }}>
      <img src={Srcs} alt="." />
    </div>
  );
}

export default IntroImg;
