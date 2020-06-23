import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({onChange, opened}) {
  return (
    <div className={'header'}>
      <div className={'header__button'} onClick={() => onChange(!opened)}>
        <FontAwesomeIcon icon={["fas", "bars"]} aria-label="Open menu" alt="Open Menu" role="button" />
      </div>
      <h1 className={'header__title'}>Menunu</h1>
    </div>
  );
}
