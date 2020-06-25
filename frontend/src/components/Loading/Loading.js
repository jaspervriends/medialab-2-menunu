import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./loading.scss";
import clsx from 'clsx';

export default function Loading({ text = null, small = false }) {
  return (
    <div className={clsx("loading", small && "loading__small")}>
      <div className={"loading__anim"}>
        <FontAwesomeIcon icon={["fas", "circle-notch"]} spin />
      </div>

      {text && (
        <span className={"loading_text"}>{text}</span>
      )}
    </div>
  )
}