import React from "react";
import "./Navigation.scss";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SettingsIcon from "@mui/icons-material/Settings";
function Navigation({ close }) {
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
          <a className="Navigation-link" href={link.path} key={link.name}>
            {link.icon}
            {link.name}
          </a>
        );
      })}
    </div>
  );
}

export default Navigation;
