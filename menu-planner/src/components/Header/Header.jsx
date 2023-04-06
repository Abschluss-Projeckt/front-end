import React, { useEffect, useContext, useState } from "react";

import { RecipeContext } from "../../contexts/Context";

import Navigationicon from "../Navigationicon/Navigationicon";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
function Header({ openDropdown, setOpenDropdown }) {
  const { loggedInCookie, getOneUser, user, logOut } =
    useContext(RecipeContext);

  useEffect(getOneUser, [loggedInCookie]);

  const location = useLocation();
  const links = [
    {
      name: "Recipes",
      path: "/recipes",
      icon: <ReceiptLongRoundedIcon />,
    },
    {
      name: "Categories",
      path: "/categories",
      icon: <CategoryIcon />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <div className="header container">
      <Link to="/" className="logo">
        tasty<span>Steps</span>
      </Link>
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

      {loggedInCookie ? (
        <div className="user_icon">
          <img
            src={user.image}
            alt="user_pic"
            referrerPolicy="no-referrer"
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown(!openDropdown);
            }}
          />
          {openDropdown && (
            <div
              className="user_dropdown"
              onClick={() => setOpenDropdown(false)}
            >
              <ul className="dropdown_list">
                <li>
                  <Link
                    className="dropdown_link"
                    to={`/users/${user.id}/recipes`}
                  >
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown_link"
                    to={`/users/${user.id}/likes`}
                  >
                    Likes
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown_link"
                    to={`/users/${user.id}/cookbook`}
                  >
                    Cookbook
                  </Link>
                </li>
                <hr />
                <li onClick={logOut} className="dropdown_link">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="sign_btns">
          <Link className="R-link" to="/login">
            <button className="start sign-in">Sign-in</button>
          </Link>
          <Link className="R-link" to="/register">
            <button className="start sign-up">Sign-up</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
