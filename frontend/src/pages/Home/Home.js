import React, { useState } from "react";
import "./home.scss";
import Button from "../../components/Button/Button"

export default function Home() {
  const [exampleState, setExampleState] = useState(false);

  return (
    <div className={"container"}>
      <div className={"filter"}>
        <Button label="afstand" />
        <Button label="favoriete" />
        <Button label="prijs" />
        <Button label="menu beschikbaar" />
      </div>
    </div>
  );
}
