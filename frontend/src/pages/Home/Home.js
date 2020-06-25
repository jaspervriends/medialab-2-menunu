import React, { useState } from "react";
import "./home.scss";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import api from "../../utils/api"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pricing, setPricing] = useState(null);

  if(!isLoaded) {
    setIsLoaded(true);
    setIsLoading(true);

    api(`restaurants?${pricing !== null ? `order[priceRange]=${pricing ? 'ASC' : 'DESC'}` : ''}`)
    .then(({data}) => {
      setIsLoading(false);
      setRestaurants(data.data)
    })
  }
  
  return (
    <div className={"container"}>
      <div className={"filter"}>
        <h2 className={"filter__title"}>Filter op</h2>
        <div className={"filter__items"}>
          {/* <Button label="afstand" />
          <Button label="favoriete" /> */}
          <Button ariaLabel="Filter op prijs" label={`prijs ${pricing !== null ? (pricing ? '- oplopend' : '- aflopend') : ''}`} onClick={() => {
            if(pricing === null) {
              setPricing(true);
            } else if(pricing) {
              setPricing(false)
            } else{
              setPricing(null);
            }
            setIsLoaded(false)
          }} />
          {/* <Button label="menu beschikbaar" /> */}
        </div>
      </div>
      <div className={"overview"}>
      {isLoading && (
        <div>Laden...</div>
      )}
      {restaurants.map((item, key) => {
        return <Card 
          key={key}
          id={item.attributes._id} 
          title={item.attributes.name} 
          description={item.attributes.description} 
          priceRange={item.attributes.priceRange} 
          logo={item.attributes.logo} 
          dogFriendly={item.attributes.dogFriendly}
          leveled={item.attributes.leveled} 
          />
      })}
      </div>
    </div>
  );
}
