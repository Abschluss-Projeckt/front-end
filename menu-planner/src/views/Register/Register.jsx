import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
    passwordAgain: "",
    errorMessage: "",
  });

  const handleForm = (e) => {
    e.preventDefault();

    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userName: value.userName,
        email: value.email,
        password: value.password,
        likedPhotos: [],
        albums: [],
      }),
    })
      .then((res) => {
        if (res.status === 201) return res.json();
        else throw Error("Email is already in use");
      })
      .then((json) => navigate("/login"))
      .catch((err) => setValue({ ...value, errorMessage: err.message }));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleForm}>
        <p id="err-msg">{value.errorMessage}</p>
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
        <div className="mb-2">
          <input
            type="password"
            placeholder="Password"
            required
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            required
            value={value.passwordAgain}
            onChange={(e) =>
              setValue({ ...value, passwordAgain: e.target.value })
            }
          />
        </div>
        <Button type="submit" varient="btn-primary">
          Sign-up
        </Button>
      </form>
    </div>
  );
}

export default Register;
