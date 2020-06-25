import React, { useState } from "react";
import "./menuCreate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuCreate({onChange}){
  const [createMenu, setCreateMenu] = useState('');
    return (
      <div className={"menu_create"}>
        <h3>Nieuw menu aanmaken</h3>

        <div className={"menu_create__input"}>
          <input className={"menu-category__create"} value={createMenu} onChange={e => {setCreateMenu(e.target.value)}} placeholder="Menu naam"/>

          <button 
            aria-label={"Menu toevoegen"}
            onClick={() => {
              if(createMenu === "") {
                alert("Vul de menu naam in.");
                return;
              }

              onChange(createMenu);
            }}
          >
            <FontAwesomeIcon icon={["fas", "plus"]}/>
          </button>
        </div>
      </div>
    )
}
