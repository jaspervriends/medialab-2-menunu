import React, { useState } from "react";
import "./menuCategory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuCategory({edit = false, onCreate = () =>{}, menu}) {
  const [opened, setOpened] = useState(false);
  const [createTitle, setCreateTitle] = useState("");
  const [createPrice, setPriceTitle] = useState(0)

  return (
    <div className={"menu-category"}>
      <div className={"menu-category__header"} onClick={() => setOpened(!opened)}>
      <h3 className={"menu-category__title"}>{menu.name}</h3>
        <div className={"menu-category__header-icon"}>
          <FontAwesomeIcon icon={["fas", "chevron-up"]} />
        </div>
      </div>
    
      {opened && (<div className={"menu-category-items"}>
        {menu.items.map((item, key) => {
          return <div key={key} className={"menu-category-item"}>
            <span className={"menu-category-item__title"}>{item.name}</span>
            <span className={"menu-category-item__prices"}>{item.price}</span>
          </div>
        })}
        {edit && (
        <div className={"menu-category-item"}>
          <input className={"menu-category-item__title"} value={createTitle} onChange={e => { setCreateTitle(e.target.value)}} />
          <input type="number" className={"menu-category-item__prices"} value={createPrice} onChange={e => { setPriceTitle(e.target.value)}} />
          <button onClick={() => {onCreate({name: createTitle, price: createPrice})}}><FontAwesomeIcon icon={["fas", "check"]} /></button>
        </div>
        )}
      </div>)}

    </div>
  );
}

export default MenuCategory;