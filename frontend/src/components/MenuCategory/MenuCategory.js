import React, { useState } from "react";
import "./menuCategory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import MenuCategoryItem from "./MenuCategoryItem/MenuCategoryItem";
import MenuCreate from './../MenuCreate/MenuCreate'
import api from "../../utils/api";

function MenuCategory({ edit = false, onCreate = () => {}, menu = {}, id}) {
  const [opened, setOpened] = useState(false);
  const [createTitle, setCreateTitle] = useState("");
  const [createPrice, setPriceTitle] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categoryItems, setCategoryItems] = useState(null);

  useState(() => {
    if(menu) {
      setCategoryItems(menu);
    }else{
      if(opened && !isLoading && !isLoaded) {
        setIsLoaded(false);
      }
    }
    
  }, [id, menu, opened]);

  // If not loaded, load items
  if(!isLoaded && opened) {
    setIsLoaded(true);
    setIsLoading(true);

    api(`menu_categories/${id}/menu_items`)
      .then(({data}) => {
        setCategoryItems(data.data)

        setIsLoading(false);
    })
  }

  return (
    <div className={"menu-category"}>
      <div className={"menu-category__header"} onClick={() => setOpened(!opened)}>
        <h3 className={"menu-category__title"} aria-label="Open Menu categorie">Restaurant titel</h3>
        <div className={clsx("menu-category__header-icon", opened && "opened")}>
          <FontAwesomeIcon icon={["fas", "chevron-up"]} aria-label="Open Menu categorie"/>
        </div>
      </div>

      {/* Opened, but nog ready */}
      {opened && (!isLoaded || isLoading) && (
        <div className={"menu-category-items"}>
          Menu items ophalen...
        </div>
      )}
    
      {/* Loaded and opened */}
      {opened && !isLoading && isLoaded && (
        <div className={"menu-category-items"}>
          {(!categoryItems || categoryItems.length === 0) && (
            <p>Deze menukaart is nog niet gevuld.</p>
          )}

          {categoryItems && categoryItems.map((item, key) => {
            return <MenuCategoryItem key={key} item={item.attributes} />;
          })}

          {edit && (
          <div className={"menu-category-item"}>
            <input className={"menu-category-item__title"} value={createTitle} onChange={e => { setCreateTitle(e.target.value)}} />
            <input type="number" className={"menu-category-item__prices"} value={createPrice} onChange={e => { setPriceTitle(e.target.value)}} />
            <button onClick={() => {onCreate({name: createTitle, price: createPrice})}}><FontAwesomeIcon icon={["fas", "check"]} /></button>
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MenuCategory;