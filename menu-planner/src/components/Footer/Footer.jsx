import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer container">
      <section className="f-s">
        <p className="f-title">www.tastySteps.com</p>
        <p className="f-text">
          tastySteps is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <p className="f-text">&copy; 2023 |tastySteps Team </p>
      </section>
      <section className="f-s">
        <p className="f-title">Contact us</p>
        <p className="f-text"> tasty-Steps@gmail.com</p>
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
