import React, { useState } from "react";
import "./menuCreate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuCreate({onChange}){
  const [createMenu, setCreateMenu] = useState('');
    return (
      <div className={"restaurant__menu"}>
        <FontAwesomeIcon icon={["fas", "plus"]} role="button" onClick={() => onChange(createMenu)}/>
        <input className={"menu-category__create"} value={createMenu} onChange={e => {setCreateMenu(e.target.value)}} placeholder="Menu naam"/>
      </div>
    )
}
