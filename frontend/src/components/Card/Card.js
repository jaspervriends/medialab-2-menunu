import React from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export function Card({id, title, description, priceRange = 0}) {
  const euroSigns = []

  for (let i = 0; i < priceRange; i++) {
    euroSigns.push(<FontAwesomeIcon icon={["fas", "euro-sign"]} aria-label={clsx("Price Range is " + priceRange)} role="img"/>)
  }

    return (
      <a href={`/restaurant/${id}`} className={"card-link"}>
        <div className={"card"}>
          <div className={"card__image"}>
          </div>
          <div className={"card__content"}>
            <h3 className={"card__title"}>
              {title}
            </h3>
            <p className={"card__description"}>
              "{description}"
            </p>
            <div className={"card__priceRange card__priceRange--" + priceRange}>
              {euroSigns}
            </div>
            {/* <div className={"card__actions"}>
              <span className={"card__actions-item"}>
                <FontAwesomeIcon icon={["fas", "star"]} />
              </span>
              <span className={"card__actions-item"}>
                <FontAwesomeIcon icon={["fas", "map-marker"]} />
              </span>
            </div> */}
          </div>
        </div>
      </a>
  );
}

export default Card;
