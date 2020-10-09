import React, { useState } from "react";

//import React from "react";

/*
const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const user = e.target.getAttribute("user");
    const password = e.target.getAttribute("password");
    e.target.reset();
    fetch("http://192.168.1.70:7777/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.valid) {
          setLoggedIn(true);
          setUsername(data.username);
        } else {
          alert("Your credentials are not valid, try again ;)");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <form onSubmit={handleFormSubmit} className="mt-4">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginForm;
*/

const LoginForm = () => {
  return (
    <form action="/login" method="POST" className="mt-4">
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="username">
          username
        </label>
        <input
          className="form-control"
          id="username"
          name="username"
          required
        />
      </div>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="password">
          password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required
        />
      </div>
      <button
        name="button"
        value="buttonId"
        type="submit"
        className="btn btn-light"
      >
        submit
      </button>
    </form>
  );
};

export default LoginForm;

/*
const LoginForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    event.target.reset();
    fetch("http://192.168.1.70:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.valid) {
          setLoggedIn(true);
          setUsername(data.username);
        } else {
          alert("Your credentials are not valid, try again ;)");
        }
      })
      .catch((error) => console.error(error));
    return (
      <form onSubmit={handleFormSubmit} className="mt-4">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };
};

export default LoginForm;
*/
