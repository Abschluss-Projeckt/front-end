import React from "react";
import IntroImg from "../IntroImg/IntroImg";
import "./Intro.scss";

function Intro() {
  const imgs = [
    {
      src: "/imgs/salad.jpg",
      title: "Vegan",
      path: "/recipes/vegan",
    },
    {
      src: "/imgs/cheese-burger.jpg",
      title: "Fast",
      path: "/recipes/fast",
    },
    { src: "/imgs/Baba ghanoush .jpg", title: "Fast", path: "/recipes/fast" },
    {
      src: "/imgs/close-up-turkish-baklava.jpg",
      title: "Oriantel",
      path: "/recipes/fast",
    },
    {
      src: "/imgs/grilled-chicken-breasts.jpg",
      title: "Fast",
      path: "/recipes/fast",
    },
    {
      src: "/imgs/imam-bayildi-traditional-turkish-food.jpg",
      title: "Fast",
      path: "/recipes/fast",
    },
    { src: "/imgs/pide-lahmajun.jpg", title: "Fast", path: "/recipes/fast" },
    { src: "/imgs/spaghetti.jpg", title: "Fast", path: "/recipes/fast" },
    {
      src: "/imgs/turkish-arabic-traditional.jpg",
      title: "Fast",
      path: "/recipes/fast",
    },
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
        {imgs.map((elem, index) => (
          <IntroImg key={index} Srcs={elem.src} title={elem.title} pt={"75%"} />
        ))}
      </section>
    </div>
  );
}

export default Intro;
