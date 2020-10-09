import React from "react";
import Todos from "./components/Todos";
import moment from "moment";

const jourj = moment();
jourj.locale("fr");
const date = document.querySelector("#time");
date.prepend(jourj.format("dddd D MMMM YYYY"));

const App = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
      <Todos />
    </div>
  );
};

export default App;
