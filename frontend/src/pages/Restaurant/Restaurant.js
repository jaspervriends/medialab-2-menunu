import React, { useState } from "react";
import "./restaurant.scss";
import Tabmenu from "../../components/Tabmenu/Tabmenu";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import api from "../../utils/api"

export default function Restaurant({props, match, ...rest}) {
  const [currentPage, setCurrentPage] = useState("menu");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  if(!isLoaded) {
    setIsLoaded(true);
    setIsLoading(true);

    api(`restaurants/${match.params.id}`)
      .then(({data}) => {
        setIsLoading(false);
        setCurrentRestaurant(data.data)
    })
  }

  if(isLoading) {
    return "Laden.."
  }

  return (
    <div className={"container"}>
      <div className={"restaurant"}>
        <div className={"restaurant__header"}>
        </div>
        <Tabmenu onChange={(value) => setCurrentPage(value)} value={currentPage}/>
      </div>

      {currentPage === "info" && (
          <div className={"restaurant__info"}>{currentRestaurant.attributes.description}</div>
      )}
      {currentPage === "menu" && (
          <div className={"restaurant__menu"}>
            <MenuCategory />
          </div>
      )}
      {currentPage === "beheer" && (
          <div>beheer</div>
      )}
    </div>
  );
}