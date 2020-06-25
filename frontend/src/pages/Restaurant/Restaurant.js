import React, { useState } from "react";
import "./restaurant.scss";
import Tabmenu from "../../components/Tabmenu/Tabmenu";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import api from "../../utils/api"
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu";
import MenuCreate from "../../components/MenuCreate/MenuCreate";
import Loading from "../../components/Loading/Loading";

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
        title: "Bewerken",
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
    return <Loading text={"Restaurant laden..."} />
  }

  return (
    <>
      <div className={"restaurant"}>
        <div className={"restaurant__header"}>
          <img src={currentRestaurant.attributes.logo} className={"restaurant__image"} />
          <h2>{currentRestaurant.attributes.name}</h2>
          <Tabmenu onChange={(value) => setCurrentPage(value)} value={currentPage} menuItems={menuItems}/>
        </div>
      </div>

      <div className={"container"}>

        {currentPage === "info" && (
          <div className={"restaurant__info"}>{currentRestaurant.attributes.description}</div>
        )}

        {currentPage === "menu" && (
          <>
            {currentRestaurant.relationships && !currentRestaurant.relationships.menus && (
              <div className={"restaurant__menu"}>
                <p>Dit restaurant heeft nog geen menu.</p>
              </div>
            )}
            
            {/* Loop through the menus */}
            {currentRestaurant.relationships && currentRestaurant.relationships.menus.data.map((item, key) => {
              return (
                <RestaurantMenu key={key} id={item.id} />
              );
            })}
          </>
        )}
        {currentPage === "edit" && (
          <>
            {currentRestaurant.relationships && !currentRestaurant.relationships.menus && (
              <div className={"restaurant__menu"}>
                <p>Dit restaurant heeft nog geen menu.</p>
              </div>
            )}
            
            {/* Loop through the menus */}
            {currentRestaurant.relationships && currentRestaurant.relationships.menus.data.map((item, key) => {
              return (
                <RestaurantMenu key={key} id={item.id} edit="true" />
              );
            })}
            
            <MenuCreate onChange={save} />
          </>
        )}
      </div>
    </>
  );
}