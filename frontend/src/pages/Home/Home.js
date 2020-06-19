import React, { useState } from "react";
import "./home.scss";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

export default function Home() {
  const [exampleState, setExampleState] = useState(false);

  return (
    <div className={"container"}>
      <div className={"filter"}>
        <span className={"filter__title"}>Filter op</span>
        <div className={"filter__items"}>
          <Button label="afstand" />
          <Button label="favoriete" />
          <Button label="prijs" />
          <Button label="menu beschikbaar" />
        </div>
      </div>
      <div className={"overview"}>
        <Card title="Restaurant" description="Description" />
      </div>
    </div>
  );
}
