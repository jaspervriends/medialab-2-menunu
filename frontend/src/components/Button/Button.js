import React, { useState, Component } from "react";
import "./button.scss";

class Button extends Component {
  render() {
    return (
    <button className={"button"}>
      {this.props.label}
    </button>
  );
  }
}

export default Button;
