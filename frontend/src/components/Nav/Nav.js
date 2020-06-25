import React from "react";
import "./nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useHistory, Link } from "react-router-dom";
import clsx from "clsx";

export default function Nav({onChange, opened}) {
  const history = useHistory();
  const path = history.location.pathname

  const navItems = [
    {
      title: 'Home',
      value: 'home',
      icon: 'home',
      link: '/home',
      ariaLabel: 'Ga naar home'
    },
    {
      title: 'Nieuw restaurant aanmaken',
      value: 'create',
      icon: 'utensils',
      link: '/create',
      ariaLabel: 'Maak een nieuw restaurant aan'
    }
  ];

  return (
      <>
        <div className={clsx('nav', opened && "nav--opened")}>
          <div className={'nav__button'} onClick={() => onChange(!opened)}>
            <FontAwesomeIcon icon={["fas", "times"]} aria-label="Sluit navigatie" role="button"s/>
          </div>
          <div className={'nav__body'}>
            <div className={'nav__account'}>
              <div>accountname</div>
              <div className={'text'}>accountemail</div>
            </div>
            <ul className={'nav__items'}>
              {navItems.map((item, key) => {
                return <li key={key} className={clsx("nav__item", path === item.link && "nav__item--active")}>
                  <Link to={item.link} onClick={() => onChange(!opened)}>
                    <FontAwesomeIcon icon={["fas", item.icon]} aria-label={item.ariaLabel} role="button" />
                    <div>{item.title}</div>
                  </Link>
                </li>
              })}
            </ul>
          </div>
          <div className={'nav__footer'}>
          <FontAwesomeIcon icon={["fas", "cog"]} aria-label="Open Instellingen" role="button" />
            Instellingen
          </div>
        </div>

        <div className={clsx('nav-overlay', opened && "nav-overlay--opened")} onClick={() => onChange(false)} />
      </>
    );
}