import React from "react";
import IntroImg from "../IntroImg/IntroImg";
import "./Intro.scss";

function Intro() {
  const imgs = [
    "/imgs/salad.jpg",
    "/imgs/cheese-burger.jpg",
    "/imgs/Baba ghanoush .jpg",
    "/imgs/close-up-turkish-baklava.jpg",
    "/imgs/grilled-chicken-breasts.jpg",
    "/imgs/imam-bayildi-traditional-turkish-food.jpg",
    "/imgs/pide-lahmajun.jpg",
    "/imgs/spaghetti.jpg",
    "/imgs/turkish-arabic-traditional.jpg",
  ];
  return (
    <div className="intro">
      <section className="part typo">
        <h1 className="title">About us</h1>
        <p className="S-talk">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          <br />
          facilis ea quo voluptas modi non pariatur, amet quas quaerat, ipsum.
        </p>
        <button className="start1">Go Ahead</button>
      </section>
      <section className="part gallery">
        {imgs.map((src, index) => (
          <IntroImg key={index} Srcs={src} pt={"75%"} />
        ))}
      </section>
    </div>
  );
}

export default Intro;
