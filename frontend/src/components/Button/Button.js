import React from "react";
import "./button.scss";

export default function Button({onClick, label, ariaLabel}) {
    return (
    <button className={"button"} aria-label={ariaLabel} onClick={onClick}>
      {label}
    </button>
  );
}
