import React from "react";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Navigationicon.scss";
function Navigationicon() {
  const [navigation, setNavigation] = useState(false);
  function closeN() {
    setNavigation(false);
  }
  return (
    <div className="Navigationicon">
      <div
        onClick={() => setNavigation(!navigation)}
        className={navigation ? "Navigation-btn active" : "Navigation-btn"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {navigation && <Navigation close={closeN} />}
    </div>
  );
}

export default Navigationicon;
