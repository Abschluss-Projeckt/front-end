import React from "react";
import { Link } from "react-router-dom";
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
    {
      src: "/imgs/Baba ghanoush .jpg",
      title: "Appetizer",
      path: "/recipes/fast",
    },
    {
      src: "/imgs/close-up-turkish-baklava.jpg",
      title: "Oriantel",
      path: "/recipes/fast",
    },
    {
      src: "/imgs/grilled-chicken-breasts.jpg",
      title: "Low Carb",
      path: "/recipes/fast",
    },
    {
      src: "/imgs/imam-bayildi-traditional-turkish-food.jpg",
      title: "Turkish",
      path: "/recipes/fast",
    },
    {
      src: "/imgs/pide-lahmajun.jpg",
      title: "Pastries",
      path: "/recipes/fast",
    },
    { src: "/imgs/spaghetti.jpg", title: "Italian", path: "/recipes/fast" },
    {
      src: "/imgs/turkish-arabic-traditional.jpg",
      title: "Meat Dishes",
      path: "/recipes/fast",
    },
  ];
  return (
    <div className="intro">
      <section className="part typo">
        <h1 className="title">About us</h1>
        <p className="S-talk">
          tastySteps is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <Link to="/recipes">
          <button className="start1">Go Ahead</button>
        </Link>
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
