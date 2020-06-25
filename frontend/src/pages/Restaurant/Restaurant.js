import React, { useState } from "react";
import "./restaurant.scss";
import Tabmenu from "../../components/Tabmenu/Tabmenu";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import api from "../../utils/api"
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu";
import MenuCreate from "../../components/MenuCreate/MenuCreate";

export default function Restaurant({props, match, ...rest}) {
  const [currentPage, setCurrentPage] = useState("menu");
  const menuItems = [
    {
        title: "Info",
        value: "info",
        ariaLabel: "Restaurant Informatie",
    },
    {
        title: "Menu",
        value: "menu",
        ariaLabel: "Menu inzien"
    },
    {
        title: "Menu aanpassen",
        value: "edit",
        ariaLabel: "Menu aanpassen",
    }
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  if(!isLoaded) {
    setIsLoaded(true);
    setIsLoading(true);

    api(`restaurants/${match.params.id}`)
      .then(({data}) => {
        setCurrentRestaurant(data.data)
        setIsLoading(false);
    })
  }

  async function save(e) {
    await api(`menus`, 
    {
      data: {
        attributes: {
        name: e
        },
        relationships: {
          restaurant: {
            data :{
              id: `/restaurants/${match.params.id}`,
              type: 'Restaurant'
            }
          }
        },
      }
    }
      )
    .then(({data}) => { 
      console.log(data.data, 'data')
      api(`restaurants/${match.params.id}`)
      .then(({data}) => {
        setCurrentRestaurant(data.data)
    })
    })
  }

  if(isLoading) {
    return "Laden.."
  }

  return (
    <div className={"container"}>
      <div className={"restaurant"}>
        <div className={"restaurant__header"}></div>
        <Tabmenu onChange={(value) => setCurrentPage(value)} value={currentPage} menuItems={menuItems}/>
      </div>

      {currentPage === "info" && (
        <div className={"restaurant__info"}>{currentRestaurant.attributes.description}</div>
      )}

      {currentPage === "menu" && (
        <div className={"restaurant__menu"}>
          {currentRestaurant.relationships && !currentRestaurant.relationships.menus && (
            <p>Dit restaurant heeft nog geen menu.</p>
          )}
          
          {/* Loop through the menus */}
          {currentRestaurant.relationships && currentRestaurant.relationships.menus.data.map((item, key) => {
            return (
              <RestaurantMenu key={key} id={item.id} />
            );
          })}
        </div>
      )}
      {currentPage === "edit" && (
        <div className={"restaurant__menu"}>
          {currentRestaurant.relationships && !currentRestaurant.relationships.menus && (
          <p>Dit restaurant heeft nog geen menu.</p>
        )}
        
        {/* Loop through the menus */}
        {currentRestaurant.relationships && currentRestaurant.relationships.menus.data.map((item, key) => {
          return (
            <RestaurantMenu key={key} id={item.id} edit="true" />
          );
        })}
          <MenuCreate onChange={save} />
        </div> 
      )}
    </div>
  );
}