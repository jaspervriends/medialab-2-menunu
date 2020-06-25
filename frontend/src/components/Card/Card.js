import React from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "react-router-dom";

export function Card({id, title, description, priceRange = 0, logo = '', dogFriendly = false, leveled = false}) {
  const euroSigns = []

  for (let i = 0; i < priceRange; i++) {
    euroSigns.push(<FontAwesomeIcon icon={["fas", "euro-sign"]} aria-label={clsx("Prijsklasse is " + priceRange)} role="img"/>)
  }

    return (
      <Link to={`/restaurant/${id}`} className={"card-link"}>
        <div className={"card"}>
          <div className={"card__image"} style={{
            backgroundImage: `url(${logo})`
          }}>
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
            <div className={"card__actions"}>
                {dogFriendly &&
                  <span className={"card__actions-item"}>
                    <FontAwesomeIcon icon={["fas", "paw"]} aria-label="Honden zijn toegestaan" />
                  </span>
                }
                {leveled &&
                  <span className={"card__actions-item"}>
                  <FontAwesomeIcon icon={["fas", "window-minimize"]} aria-label="Restaurant is gelijkvloers"/>
                </span>
                }
            </div>
          </div>
        </div>
        </Link>
  );
}

export default Card;
