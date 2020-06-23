import React, { Component } from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Card extends Component {
  render() {
    return (
    <div className={"card"}>
      <div className={"card__image"}>
      </div>
      <div className={"card__content"}>
        <h3 className={"card__title"}>
          {this.props.title}
        </h3>
        <p className={"card__description"}>
          "{this.props.description}"
        </p>
        <p className={"card__priceRange--" + this.props.priceRange}>
          {this.props.priceRange}
        </p>
        <div className={"card__actions"}>
          <span className={"card__actions-item"}>
            <FontAwesomeIcon icon={["fas", "star"]} />
          </span>
          <span className={"card__actions-item"}>
            <FontAwesomeIcon icon={["fas", "map-marker"]} />
          </span>
        </div>
      </div>
    </div>
  );
  }
}

export default Card;
