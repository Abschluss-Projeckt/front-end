import React from "react";
import { Link } from "react-router-dom";
import "./Points.scss";
function Points() {
  const ern = [
    "Learn new recepies",
    "Write your own recepies",
    "More nutritions facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <div className="points">
      <section className="partx image">
        <img src="/imgs/pasta.jpg" alt="#" />
      </section>
      <section className="partx typo1">
        <h1 className="title">Improve Your Cooking Skills</h1>
        {ern.map((item, index) => (
          <p className="why" key={index}>
            {item}
          </p>
        ))}
        <button className="start">
          <Link className="R-link" to="/register">
            Signup now
          </Link>
        </button>
      </section>
    </div>
  );
}

export default Points;
