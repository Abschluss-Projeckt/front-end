import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { RecipeContext } from "../../contexts/Context";

import axios from "axios";

export default function Login() {
  const { loggedInCookie } = useContext(RecipeContext);

  const [value, setValue] = useState({
    email: "",
    password: "",
    errorMessage: "",
  });

  useEffect(() => {
    if (loggedInCookie) {
      navigate("/");
    }
  }, []);

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    axios
      .post(
        "/api/auth/login",
        {
          email: value.email,
          password: value.password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => setValue({ ...value, errorMessage: err.message }));
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
      <form onSubmit={handleForm}>
        <p>
          Have you already registered?{" "}
          <Link to="/login" style={{ textDecoration: "underline" }}>
            Sign up
          </Link>
        </p>
        <a
          href="/api/auth/google"
          type="button"
          className="login-with-google-btn"
        >
          <img
            src="imgs/icons8-google-48.png"
            alt="google-icon"
            className="google-icon"
          />
        </a>
        <div>
          <input
            type="email"
            placeholder="E-Mail Address"
            required
            value={value.email}
            onChange={(e) => {
              setValue({ ...value, email: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            value={value.password}
            onChange={(e) => {
              setValue({ ...value, password: e.target.value });
            }}
          />
        </div>
        <p className="red">{value.errorMessage}</p>
        <button className="signup-btn">Sign-in</button>
      </form>
    </div>
  );
}
