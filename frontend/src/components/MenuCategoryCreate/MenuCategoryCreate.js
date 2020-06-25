import React, { useState } from "react";
import "./menuCategoryCreate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuCategoryCreate({onChange}){
  const [createMenuCategory, setCreateMenuCategory] = useState('');
    return (
      <div>
        <FontAwesomeIcon icon={["fas", "plus"]} role="button" onClick={() => onChange(createMenuCategory)}/>
        <input className={"menu-category__create"} value={createMenuCategory} onChange={e => {setCreateMenuCategory(e.target.value)}} placeholder="Menu categorie"/>
      </div>
    )
}