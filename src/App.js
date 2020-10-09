import React, { useState } from "react";
//import React from "react";
import Todos from "./components/Todos";
import moment from "moment";
import LoginForm from "./components/LoginForm.js";
import Dashboard from "./components/Dashboard.js";

const jourj = moment();
jourj.locale("fr");
const date = document.querySelector("#time");
date.prepend(jourj.format("dddd D MMMM YYYY"));

/*
function App() {
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4"> Authentification </h1>
      <Todos />
      <h2 className="text-center">Login</h2>
      <Dashboard />
      <LoginForm />
    </div>
  );
}

export default App;
*/

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const handleLogoutClick = () => {
    setUsername("");
    setLoggedIn(false);
  };
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4"> Authentification </h1>
      {!loggedIn && (
        <LoginForm setUsername={setUsername} setLoggedIn={setLoggedIn} />
      )}
      {loggedIn && (
        <>
          <Dashboard user={username} />
          <button className="btn btn-danger" onClick={handleLogoutClick}>
            Log out
          </button>
        </>
      )}
    </div>
  );
}

export default App;
