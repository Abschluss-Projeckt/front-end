import React from "react";
import Navigationicon from "../Navigationicon/Navigationicon";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
function Header() {
  const location = useLocation();
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
    <div className="header container">
      <a href="/" className="logo">
        Baba<span>Ghanoush</span>
      </a>
      <nav className="navi">
        {links.map((link) => (
          <Link
            className={location.pathname == link.path ? "active" : ""}
            to={link.path}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Navigationicon />
    </div>
  );
}

export default Header;
