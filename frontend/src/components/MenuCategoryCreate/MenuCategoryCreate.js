import React, { useState } from "react";
import "./menuCategoryCreate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuCategoryCreate({onChange}){
  const [createMenuCategory, setCreateMenuCategory] = useState('');
  
  return (
    <div className={"menu__category_create"}>
      <h3>Categorie aanmaken</h3>

      <div className={"menu__category_create__input"}>
        <input className={"menu-category__create"} value={createMenuCategory} onChange={e => {setCreateMenuCategory(e.target.value)}} placeholder="Menu categorie"/>
        <button onClick={() => {
          if(createMenuCategory === "") {
            alert("Vul de category naam in.");
            return;
          }

          onChange(createMenuCategory);
        }}>
          <FontAwesomeIcon icon={["fas", "plus"]}/>
        </button>
      </div>
    </div>
  )
}