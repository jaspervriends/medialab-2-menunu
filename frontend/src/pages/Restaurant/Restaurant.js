import React, { useState } from "react";
import "./restaurant.scss";
import Tabmenu from "../../components/Tabmenu/Tabmenu";
import MenuCategory from "../../components/MenuCategory/MenuCategory";

export default function Restaurant() {
  const [currentPage, setCurrentPage] = useState("menu");

  return (
    <div className={"container"}>
      <div className={"restaurant"}>
        <div className={"restaurant__header"}></div>
        <Tabmenu onChange={(value) => setCurrentPage(value)} value={currentPage}/>
      </div>

      {currentPage === "info" && (
          <div className={"restaurant__info"}>Het verhaal van Bram Ladage begon in 1967, met een druk bezochte patatkraam op de markt van Rotterdam.
            Bram: ”Ik ben op de markt opgegroeid. Vier uur of half vijf opstaan en dan keihard aanpoten tussen de klapperende zeilen. Vanaf mijn elfde hielp ik mijn vader met de patat, vanaf mijn zestiende stond ik bij mijn moeder tussen de stoffen. Dat vond ik maar niks. Twee jaar later had ik mijn eigen patatkraam.
            Inmiddels is Bram Ladage uitgegroeid tot een franchiseformule met 30+ filialen in Rotterdam en omstreken!
          </div>
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