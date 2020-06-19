import React, { useState } from "react";
import "./inloggen.scss";

export default function Inloggen() {
  return (
    <div className={"example-div"}>
      <p>
        {exampleState ? "De state staat op true" : "De state staat op false"}
      </p>
      <button onClick={() => setExampleState(!exampleState)}>
        Toggle state
      </button>
    </div>
  );
}
