import React, { useEffect, useContext, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { RecipeContext } from "../../contexts/Context";

import UserRecipes from "./Recipes/UserRecipes";
import UserLikes from "./UserLikes/UserLikes";
import Cookbook from "./Cookbook/Cookbook";

import "./User.scss";

function User() {
  const { getOneUser, user } = useContext(RecipeContext);

  const [activeTab, setActiveTab] = useState(0);

  const param = useParams();

  useEffect(getOneUser, []);

  useEffect(() => {
    const tabIndex = tabs.findIndex(
      (tab) => tab.label.toLowerCase() === param.tab
    );
    setActiveTab(tabIndex);
  }, [param.tab]);

  const tabs = [
    {
      label: "Recipes",
      content: <UserRecipes />,
    },
    {
      label: "Likes",
      content: <UserLikes />,
    },
    {
      label: "Cookbook",
      content: <Cookbook />,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="user-page">
      <div className="user_info">
        <div className="user_info-pic">
          <img src={user.image} alt="" />
          <h1 className="title">{user.userName}</h1>
        </div>
        <div className="tabs">
          <div className="tabs-header">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                className={`tab-header-item ${
                  index === activeTab ? "active" : ""
                }`}
                to={`/users/${user.id}/${tab.label.toLowerCase()}`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <div className="tabs-content">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
}

export default User;
