import React from 'react';

export default function MenuCategoryItem({ item }) {
  return (
    <div className={"menu-category-item"}>
      <span className={"menu-category-item__title"}>{item.name}</span>
      <span className={"menu-category-item__prices"}>&euro; {item.price}</span>
    </div>
  )
}