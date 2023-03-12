import React from "react";
import Points from "../../components/Points/Points";
import Intro from "../../components/Intro/Intro";
import Quote from "../../components/Quote/Quote";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <Intro />
      <Points />
      <Quote />
    </div>
  );
}

export default Home;
