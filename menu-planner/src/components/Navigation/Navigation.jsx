import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SettingsIcon from "@mui/icons-material/Settings";
function Navigation({ close }) {
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
    <div className="Navigation" onClick={close}>
      {links.map((link) => {
        return (
          <Link
            className={
              location.pathname == link.path
                ? "Navigation-link active"
                : "Navigation-link"
            }
            to={link.path}
            key={link.name}
          >
            {link.icon}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Navigation;
