import React from "react";
import Navigation from "../Navigation/Navigation";
import Navigationicon from "../Navigationicon/Navigationicon";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SettingsIcon from "@mui/icons-material/Settings";

import "./Header.scss";
function Header() {
  const links = [
    {
      name: "Home",
      path: "/",
      icon: <HomeRoundedIcon />,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: <ReceiptLongRoundedIcon />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <>
      <div className="header container">
        <a href="/" className="logo">
          Baba<span>Ghanoush</span>
        </a>
        <nav className="navi">
          {links.map((link) => (
            <a href={link.path} key={link.name}>
              {link.name}
            </a>
          ))}
        </nav>
        <Navigationicon />
      </div>
      <Navigation />
    </>
  );
}

export default Header;
