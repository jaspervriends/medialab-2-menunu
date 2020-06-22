import React, { useState } from "react";
import "./nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav({onChange, opened}) {

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
      link: '/'
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
              return <li key={key} className={'nav__item'}>
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