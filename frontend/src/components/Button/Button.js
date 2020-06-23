import React, { useState, Component } from "react";
import "./button.scss";

export default function Button({onClick, label}) {
    return (
    <button className={"button"} onClick={onClick}>
      {label}
    </button>
  );
}
