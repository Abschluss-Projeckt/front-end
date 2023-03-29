import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//import { RecipeContext } from "../../contexts/Context";

import "./Register.scss";

function Register() {
  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
    passwordAgain: "",
    errorMessage: "",
  });

  const navigate = useNavigate();

  const passControl = (e) => {
    if (value.password === e.target.value)
      return setValue({
        ...value,
        passwordAgain: e.target.value,
        errorMessage: "Passwörter stimmen überein",
      });

    return setValue({
      ...value,
      passwordAgain: e.target.value,
      errorMessage: "",
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    try {
      if (value.password === value.passwordAgain) {
        axios
          .post(
            "/api/auth/register",
            {
              userName: value.userName,
              email: value.email,
              password: value.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((err) => console.log(err));
      } else {
        const err = new Error("Passwörter stimmen nicht überein");
        throw err;
      }
    } catch (err) {
      setValue({ ...value, errorMessage: err.message });
    }
  };

  const errMsg =
    value.errorMessage === "Passwörter stimmen überein" ? "green" : "red";

  return (
    <div className="register-container">
      <h1 className="title">Register</h1>
      <form onSubmit={handleForm}>
        <p>
          Have you already registered?{" "}
          <Link to="/login" style={{ textDecoration: "underline" }}>
            Sign in
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
            type="text"
            placeholder="User Name"
            required
            value={value.userName}
            onChange={(e) => setValue({ ...value, userName: e.target.value })}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-Mail Address"
            required
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            value={value.passwordAgain}
            onChange={passControl}
          />
        </div>
        <p className={`${errMsg} err-msg`}>{value.errorMessage}</p>
        <button type="submit" className="signup-btn">
          Sign-up
        </button>
      </form>
    </div>
  );
}

export default Register;
