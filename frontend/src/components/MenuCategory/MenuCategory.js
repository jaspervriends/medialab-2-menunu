import React, { useState } from "react";
import "./menuCategory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import MenuCategoryItem from "./MenuCategoryItem/MenuCategoryItem";
import MenuCreate from './../MenuCreate/MenuCreate'
import api from "../../utils/api";
import Loading from "../Loading/Loading";

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
  async function createMenuItem(e) {
    await api(`menu_items`, 
    {
      data: {
        attributes: {
        name: e.name,
        price: parseFloat(e.price),
        },
        relationships: {
          menuCategory: {
            data :{
              id: `/menu_categories/${menu._id}`,
              type: 'MenuCategory'
            }
          }
        },
      }
    }
    )
    .then(({data}) => { 
      api(`menu_categories/${id}/menu_items`)
      .then(({data}) => {
        setCategoryItems(data.data)
        setCreateTitle('');
        setPriceTitle('');
        
      })
    })
  }

  return (
    <div className={"menu-category"}>
      <div className={"menu-category__header"} onClick={() => setOpened(!opened)}>
        <h3 className={"menu-category__title"} aria-label="Open Menu categorie">{menu.name && (menu.name)}</h3>
        <div className={clsx("menu-category__header-icon", opened && "opened")}>
          <FontAwesomeIcon icon={["fas", "chevron-up"]} aria-label="Open Menu categorie"/>
        </div>
      </div>

      {/* Opened, but nog ready */}
      {opened && (!isLoaded || isLoading) && (
        <div className={"menu-category-items"}>
          <Loading small />
        </div>
      )}
    
      {/* Loaded and opened */}
      {opened && !isLoading && isLoaded && (
        <div className={"menu-category-items"}>
          {(!categoryItems || categoryItems.length === 0) && (
            <p>Deze categorie is nog niet gevuld.</p>
          )}

          {categoryItems && categoryItems.map((item, key) => {
            return <MenuCategoryItem key={key} item={item.attributes} />;
          })}

          {edit && (
          <div className={"menu-category-add"}>
            <h3>Item toevoegen</h3>

            <div className={"menu-category-add__input"}>
              <input className={"menu-category-add__input__title"} value={createTitle} onChange={e => { setCreateTitle(e.target.value)}} />
              <input type="number" className={"menu-category-add__input__price"} value={createPrice} onChange={e => { setPriceTitle(e.target.value)}} />
              <button onClick={() => {createMenuItem({name: createTitle, price: createPrice})}}><FontAwesomeIcon icon={["fas", "paper-plane"]} /></button>
            </div>
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MenuCategory;