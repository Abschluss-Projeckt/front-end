import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../IntroImg/IntroImg";
import "./Intro.scss";

function Intro() {
  const imgs = [
    {
      src: "/imgs/salad.jpg",
      title: "Vegan",
      path: "/categories/vegan",
    },
    {
      src: "/imgs/cheese-burger.jpg",
      title: "Meat",
      path: "/categories/meat%20dishes",
    },
    {
      src: "/imgs/Baba ghanoush .jpg",
      title: "Appetizer",
      path: "/categories/appetizer",
    },
    {
      src: "/imgs/close-up-turkish-baklava.jpg",
      title: "Dessert",
      path: "/categories/dessert",
    },
    {
      src: "/imgs/grilled-chicken-breasts.jpg",
      title: "Asian",
      path: "/categories/asian",
    },
    {
      src: "/imgs/imam-bayildi-traditional-turkish-food.jpg",
      title: "Turkish",
      path: "/categories/turkish",
    },
    {
      src: "/imgs/pide-lahmajun.jpg",
      title: "Oriental",
      path: "/categories/oriental",
    },
    {
      src: "/imgs/spaghetti.jpg",
      title: "Italian",
      path: "/categories/italian",
    },
    {
      src: "/imgs/turkish-arabic-traditional.jpg",
      title: "Main Course",
      path: "/categories/main%20course",
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
          <IntroImg
            key={index}
            path={elem.path}
            Srcs={elem.src}
            title={elem.title}
            pt={"75%"}
          />
        ))}
      </section>
    </div>
  );
}

export default Intro;
