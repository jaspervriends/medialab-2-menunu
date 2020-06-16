import React, { useState } from "react";
import "./home.scss";

export default function Home() {
  const [exampleState, setExampleState] = useState(false);

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
