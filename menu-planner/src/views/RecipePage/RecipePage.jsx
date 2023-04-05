import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { Link } from "react-router-dom";

import FilledLikeBtn from "@mui/icons-material/Favorite";
import LikeBtn from "@mui/icons-material/FavoriteBorder";
import SaveBtn from "@mui/icons-material/TurnedInNot";
import FilledSaveBtn from "@mui/icons-material/TurnedIn";

import { RecipeContext } from "../../contexts/Context";

import "./RecipePage.scss";

function RecipePage() {
  const { loggedInCookie, user, allUsers, getAllRecipes } =
    useContext(RecipeContext);

  const [recipe, setRecipe] = useState({});
  const [portion, setPortion] = useState(0);
  const [amount, setAmount] = useState(1);
  const [filledStars, setFilledStart] = useState(0);
  const [commentValue, setCommentValue] = useState("");
  const [deletePopover, setDeletePopover] = useState(false);

  const { recipeId } = useParams();
  const navigate = useNavigate();

  const calculateRating = (rating) => {
    const total = rating.recipeRanking?.reduce((total, num) => total + num, 0);

    return Math.round(total / rating.recipeRanking?.length);
  };

  useEffect(() => {
    axios
      .get(`/api/recipes/${recipeId}`)
      .then((res) => {
        setRecipe(res.data);
        setPortion(res.data?.portion);
        setFilledStart(calculateRating(res.data));
      })
      .catch((err) => console.log(err));
  }, [recipeId]);

  if (!recipe) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  const handleMinus = () => {
    portion > 0 ? setPortion(portion - 1) : setPortion(0);
  };
  const handlePlus = () => {
    setPortion(portion + 1);
  };

  useEffect(() => {
    setAmount(portion / recipe.portion);
  }, [portion]);

  // useEffect(() => {}, [recipeId])
  const handleMouseOver = (index) => {
    setFilledStart(index);
  };

  const handleMouseOut = () => {
    setFilledStart(calculateRating(recipe));
  };

  const ratedStars = [];

  for (let i = 1; i <= 5; i++) {
    const filled = i <= filledStars ? "★" : "☆";
    ratedStars.push(
      <span
        key={i}
        onClick={() => rateRecipe(i)}
        onMouseOver={() => handleMouseOver(i)}
        onMouseOut={handleMouseOut}
      >
        {filled}
      </span>
    );
  }

  const rateRecipe = (rating) => {
    console.log(rating);
    if (loggedInCookie) {
      const newValue = recipe.recipeRanking.push(+rating);

      axios
        .patch(`/api/recipes/${recipeId}`, {
          ...recipe,
          recipeRanking: recipe.recipeRanking,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      alert(`You should first sign up!`);
    }
  };

  const handleLikeOrSave = (param) => {
    if (loggedInCookie) {
      console.log(user);
      const newValue = user[param].push(recipeId);
      axios
        .patch(`/api/users/${user.id}`, {
          ...user,
          param: user[param],
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      alert(`You should first sign up!`);
    }
  };

  const handleUnlikeOrUnsave = (param) => {
    if (loggedInCookie) {
      const recipeIndex = user[param].findIndex((r) => r == recipeId);
      const newValue = user[param].splice(recipeIndex, 1);

      axios
        .patch(`/api/users/${user.id}`, {
          ...user,
          param: user[param],
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, " ");

    if (loggedInCookie) {
      if (commentValue !== "") {
        const comment = {
          comment: commentValue,
          user: user.id,
          date: formattedDate,
        };

        recipe.comments.push(comment);

        axios
          .patch(`/api/recipes/${recipeId}`, {
            ...recipe,
            comments: recipe.comments,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    } else {
      alert(`You should first sign up!`);
    }

    setCommentValue("");
  };

  const handleDeletePopover = () => {
    if (loggedInCookie) {
      axios
        .delete(`/api/recipes/${recipeId}`)
        .then((res) => {
          console.log(res);
          getAllRecipes();
          navigate(-1);
        })
        .catch((err) => console.log(err));
    }

    const fileName = recipe.image.replace("/uploads/", "");

    axios
      .delete(`/api/delete-image/${fileName}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="recipe-page">
      <div className="back_btn">
        <button onClick={() => navigate(-1)}>Back</button>
        {recipe.user?._id === loggedInCookie ? (
          <div>
            <button
              className="deleteBtn"
              onClick={() => setDeletePopover(!deletePopover)}
            >
              Delete
            </button>
            {deletePopover && (
              <div className="delete_popover">
                <p>
                  Are you sure you want to <br /> delete this recipe?
                </p>
                <div>
                  <button onClick={() => setDeletePopover(false)}>
                    Cancel
                  </button>
                  <button onClick={handleDeletePopover}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div className="recipe">
        <div className="img">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="recipe_nav">
          <a href="#overview">Overview</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#steps">Steps</a>
          <a href="#comments">Comments</a>
        </div>
        <section>
          <div id="overview" className="title_cont">
            <h2>{recipe.name}</h2>
            <div className="ranking">
              <div className="stars">
                {ratedStars}
                {/* <small>Rate it!</small> */}
              </div>
              <div className="like-and-save">
                {user.likedRecipes?.includes(recipeId) ? (
                  <FilledLikeBtn
                    onClick={() => handleUnlikeOrUnsave("likedRecipes")}
                    className="like_btn"
                  />
                ) : (
                  <LikeBtn
                    onClick={() => handleLikeOrSave("likedRecipes")}
                    className="like_btn"
                  />
                )}
                {user.savedRecipes?.includes(recipeId) ? (
                  <FilledSaveBtn
                    onClick={() => handleUnlikeOrUnsave("savedRecipes")}
                    className="save_btn"
                  />
                ) : (
                  <SaveBtn
                    onClick={() => handleLikeOrSave("savedRecipes")}
                    className="save_btn"
                  />
                )}
              </div>
            </div>
            <div className="recipe-user">
              <img
                src={recipe.user?.image}
                alt=""
                referrerPolicy="no-referrer"
              />
              <h4>{recipe.user?.userName}</h4>
            </div>
            <p>{recipe.explanation}</p>
          </div>
          <div id="ingredients" className="ingrd_cont">
            <h3>Preparation Time:</h3>
            <p>{recipe.preparationTime} min</p>

            <h3>Ingredients:</h3>

            <div className="portion">
              <p onClick={handleMinus} className="minus">
                -
              </p>
              <p>{portion}</p>
              <p onClick={handlePlus} className="plus">
                +
              </p>
              <p className="portion_title">
                {recipe.portion > 1 ? "Servings" : "Serving"}
              </p>
            </div>

            <ul>
              {recipe?.ingredients?.map((ingredient, index) => (
                <li key={index}>
                  <div className="amount-M">
                    <p>
                      {ingredient.amount && amount * ingredient.amount}{" "}
                      {ingredient.measure}
                    </p>
                  </div>
                  <p>{ingredient.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div id="steps" className="steps_cont">
            <h3>Steps:</h3>
            <ol>
              {recipe?.description?.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ol>
          </div>
          <div id="comments" className="comments_cont">
            <h3>Comments</h3>
            <div className="all_comments">
              {recipe.comments?.length === 0 ? (
                <p>
                  There are no comments at the moment. Be the first to comment.
                </p>
              ) : (
                recipe.comments?.map((comment, i) => {
                  const commentUser = allUsers.find(
                    (user) => user.id === comment.user
                  );
                  const date = new Date(comment.createdAt);
                  const commentDate = date.toLocaleDateString("en-GB");
                  return (
                    <div key={i} className="comment">
                      <div className="comment_user">
                        <img
                          src={commentUser?.image}
                          alt=""
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4>{commentUser?.userName}</h4>
                          <small>{comment.date}</small>
                        </div>
                      </div>
                      <div className="comment_text">
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <form onSubmit={handleSubmit} className="your_comment">
              <textarea
                value={commentValue}
                onChange={handleChange}
                placeholder="Your comment..."
              ></textarea>
              <button type="submit">Send</button>
              <button onClick={() => setCommentValue("")} type="reset">
                Reset
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RecipePage;
