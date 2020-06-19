import React, { Component, useState, useEffect } from "react";
import "./tabmenu.scss";
import clsx from "clsx";

function Tabmenu({onChange, value}) {
    const [currentSelected, setCurrentSelected] = useState(null);

    useEffect(() => {
        setCurrentSelected(value)
    }, [value])

    const menuItems = [
        {
            title: "Info",
            value: "info"
        },
        {
            title: "Menu",
            value: "menu"
        },
        {
            title: "Beheer",
            value: "beheer"
        }
    ];

    return (
        <div className={"tabmenu"}>
            {menuItems.map((item, key) => {
                return <div key={key} className={clsx("tabmenu__item", currentSelected === item.value && "selected")} onClick={() => {onChange(item.value)}}>{item.title}</div>
            })}
        </div>
    );
}

export default Tabmenu;