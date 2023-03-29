import React, { useEffect, useContext, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { RecipeContext } from "../../contexts/Context";

import "./Navigation.scss";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SettingsIcon from "@mui/icons-material/Settings";

function Navigation({ close }) {
  const { loggedInCookie, getOneUser, user, logOut } =
    useContext(RecipeContext);

  useEffect(getOneUser, [loggedInCookie]);

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
      <hr />
      {loggedInCookie ? (
        <div className="user_icon_sidebar">
          <div className="user_pic">
            <img src={user.image} alt="user_pic" referrerPolicy="no-referrer" />
            <h4>{user.userName}</h4>
          </div>

          <div className="user_dropdown">
            <ul className="dropdown_list">
              <li className="dropdown_link">
                <Link to={`/users/${user._id}`}>Recipes</Link>
              </li>
              <li className="dropdown_link">Likes</li>
              <li className="dropdown_link">Cookbook</li>

              <li className="dropdown_link">Settings</li>
              <li onClick={logOut} className="dropdown_link">
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="sign_btns_sidebar">
          <Link className="sign-links" to="/login">
            <button className="sign-in">Sign-in</button>
          </Link>
          <Link className="sign-links" to="/register">
            <button className="sign-up">Sign-up</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navigation;
