import React, { useState } from "react";
import "./menuCategory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuCategory() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={"menu-category"}>
      <div className={"menu-category__header"} onClick={() => setOpened(!opened)}>
        <h3 className={"menu-category__title"}>Restaurant titel</h3>
        <div className={"menu-category__header-icon"}>
          <FontAwesomeIcon icon={["fas", "chevron-up"]} />
        </div>
      </div>
    
      {opened && (<div className={"menu-category-items"}>
        <div className={"menu-category-item"}>
            <span className={"menu-category-item__title"}>Kinderijsje</span>
            <span className={"menu-category-item__prices"}>5 euro</span>
        </div>
        <div className={"menu-category-item"}>
            <span className={"menu-category-item__title"}>Kinderijsje</span>
            <span className={"menu-category-item__prices"}>5 euro</span>
        </div>
      </div>)}

    </div>
  );
}

export default MenuCategory;