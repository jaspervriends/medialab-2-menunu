import React, { useState, useEffect } from "react";
import "./nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {matchPath ,useHistory } from "react-router-dom";
import clsx from "clsx";

export default function Nav({onChange, opened}) {
  const history = useHistory();
  const path = history.location.pathname

  const navItems = [
    {
      title: 'Home',
      value: 'home',
      icon: 'home',
      link: '/home'
    },
    {
      title: 'Nieuw restaurant aanmaken',
      value: 'create',
      icon: 'utensils',
      link: '/create'
    }
  ]
    return (
      <div className={'nav'}>
        <div className={'nav__button'} onClick={() => onChange(!opened)}>
          <FontAwesomeIcon icon={["fas", "times"]} />
        </div>
        <div className={'nav__body'}>
          <div className={'nav__account'}>
            <div>accountname</div>
            <div className={'text--light'}>accountemail</div>
          </div>
          <ul className={'nav__items'}>
            {navItems.map((item, key) => {
              return <li key={key} className={clsx("nav__item", path === item.link && "nav__item--active")}>
                <a href={item.link}>
                  <FontAwesomeIcon icon={["fas", item.icon]} />
                  <div>{item.title}</div>
                </a>
                </li>
            })}
          </ul>
        </div>
        <div className={'nav__footer'}>
        <FontAwesomeIcon icon={["fas", "cog"]} />
          Instellingen
        </div>
      </div>
    );
}