import React from "react";

const TodoSelect = () => {
  return (
    <div className="input-group input-group-lg mb-3 py-2 ">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        filtre
      </label>
      <select className="form-select" id="select">
        <option value="all">all</option>
        <option value="1">Done</option>
        <option value="2">Undone</option>
      </select>
    </div>

    /*const ulEl = document.createElement("ul");
      const gridContainer = document.getElementById("section-content");
      ulEl.classList.add("list-unstyled");
      const filterEntries = entries.filter((el) => {
        // on utilise ici filterCategory pour classer les catégories
        if (filterCategory === "toutes") {
          return true;
        } else {
          return el.category.includes(filterCategory);
        }
      });
*/
  );
};

TodoSelect();

export default TodoSelect;
