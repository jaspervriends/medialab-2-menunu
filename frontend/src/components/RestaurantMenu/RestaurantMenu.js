import React, { useState, useEffect } from 'react';
import MenuCategory from '../MenuCategory/MenuCategory';
import MenuCategoryCreate from '../MenuCategoryCreate/MenuCategoryCreate'
import api from '../../utils/api';

export default function RestaurantMenu({ id, edit = false }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [menu, setMenu] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);

  // Only reload if the ID has changed
  useEffect(() => {
    // setIsLoading(false);
    setIsLoaded(false);
  }, [id]);

  // Reload menu data
  if(!isLoading) {
    setIsLoading(true);

    api(`${id.substr(1)}?include=menuCategories`)
      .then(({data}) => {
        // Set menu
        setMenu(data.data);

        const menuCategories = [];

        // Set menu categories
        if (data.included) {
          data.included.forEach(item => {
            if(item.type === "MenuCategory") {
              menuCategories.push(item);
            }
          });
        }

        // Set menu categories
        setMenuCategories(menuCategories)

        setIsLoaded(true);
    })
  }

  async function createMenuCategory(e) {
    await api(`menu_categories`, 
    {
      data: {
        attributes: {
        name: e
        },
        relationships: {
          menu: {
            data :{
              id: menu.id,
              type: 'Menu'
            }
          }
        },
      }
    }
      )
    .then(({data}) => { 
      api(`${id.substr(1)}?include=menuCategories`)
      .then(({data}) => {
        // Set menu
        setMenu(data.data);

        const menuCategories = [];

        // Set menu categories
        if (data.included) {
          data.included.forEach(item => {
            if(item.type === "MenuCategory") {
              menuCategories.push(item);
            }
          });
        }

        // Set menu categories
        setMenuCategories(menuCategories)
    })
    })
  }

  // Wait for the menu
  if(!isLoaded) {
    return (
      <p>Menu laden...</p>
    )
  }

  // There were no menu categories
  if(!menuCategories || menuCategories.length === 0) {
    return (
      <div>
        <h2>{menu.attributes.name}</h2>
        <p>Er zijn geen categoriën toegevoegd in dit menu.</p>
        {edit && (
          <MenuCategoryCreate onChange={createMenuCategory} />
        )}
      </div>
    )
  }

  // Loop through the categories
  return (
    <div>
      <h2>{menu.attributes.name}</h2>
      {menuCategories.map((item, key) => {
        return (
          <div>
            <MenuCategory key={key} menu={item.attributes} id={item.attributes._id} edit={edit} />
            {edit && (
              <MenuCategoryCreate onChange={createMenuCategory} />
            )}
          </div>
          );
      })}
    </div>
  )
}