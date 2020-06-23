import React, { useState, useEffect } from "react";
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
            value: "info",
            ariaLabel: "Restaurant Informatie",
        },
        {
            title: "Menu",
            value: "menu",
            ariaLabel: "Menu inzien"
        },
        {
            title: "Menu aanpassen",
            value: "Menu aanpassen",
            ariaLabel: "Menu aanpassen",
        }
    ];

    return (
        <div className={"tabmenu"}>
            {menuItems.map((item, key) => {
                return <div key={key} aria-label={item.ariaLabel}  className={clsx("tabmenu__item", currentSelected === item.value && "selected", item.disabled && "disabled")} onClick={() => {onChange(item.value)}}>{item.title}</div>
            })}
        </div>
    );
}

export default Tabmenu;