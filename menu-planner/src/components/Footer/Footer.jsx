import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer container">
      <section className="f-s">
        <p className="f-title">www.BabaGhanoush.com</p>
        <p className="f-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere saepe
          maiores cum voluptatem hic est repellendus natus alias quos? Error
        </p>
        <p className="f-text">&copy; 2023 | BabaGhanoush Team </p>
      </section>
      <section className="f-s">
        <p className="f-title">Contact us</p>
        <p className="f-text"> Baba-Ghanoush@gmail.com</p>
        <p className="f-text">+1631295731</p>
        <p className="f-text">04103 Leipzig</p>
      </section>
      <section className="f-s">
        <p className="f-title">Socials</p>
        <p className="f-text">Facebook</p>
        <p className="f-text">Twitter</p>
        <p className="f-text">Instagram</p>
      </section>
    </div>
  );
}

export default Footer;
