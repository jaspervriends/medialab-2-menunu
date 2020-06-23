import React, { useState } from "react";
import "./create.scss";
import "../Restaurant/restaurant.scss"
import Tabmenu from "../../components/Tabmenu/Tabmenu";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import api from "../../utils/api";
import { useHistory } from "react-router-dom";

export default function Create() {
  let history = useHistory();
  const [currentPage, setCurrentPage] = useState("info");
  const [createForm, setCreateForm] = useState({
    name: '',
    description: '',
    phone: 0,
    // email: '',
    // street: '',
    // zip: '',
    // city: '',
    // countryCode: '',
    // leveled: false,
    // dogFriendly: false,
    // logo: '',
    // tags: []

  });
  const [menuItems, setMenuItems] = useState([
    {
        title: "Info",
        value: "info",
        ariaLabel: "Restaurant Informatie",
    },
    {
        title: "Menu",
        value: "menu",
        ariaLabel: "Menu aanmaken",
        disabled: true
    },
]);

const [menus, setMenus] = useState([
  { 
    name: 'patat',
    id: 1,
    items: [
      {
        name: 'paataat',
        price: 1.40
      }
    ]
  },
  { 
    name: 'patat2',
    id: 2,
    items: [
      {
        name: 'paataat2',
        price: 1.40
      }
    ]
  },
])

function menuUpdate(val, menu) {
  const menuIndex = menus.findIndex((e) => { return e.id === menu.id})
  setMenus(menus[menuIndex].items.push(val))
}

async function create (){
  await api(`restaurants`, {data: {attributes:createForm,}} )
  .then(({data}) => { 
   history.push(`/restaurant/${data.data.attributes._id}`);
    setMenuItems(
      [
        menuItems[0],
        {
          ...menuItems[1], 
        disabled : false
        }
      ]
    )
  })
}
  return (
    <div className={"container"}>
      <div className={"create"}>
        <div className={"create__header"}>
        </div>
      {currentPage === "info" && (
        <div className={"create__info"}>
          <div className={'create__field'}>
            <label className={'create__label'}> Restaurant Naam </label>
            <input className={'create__title'} value={createForm.name} onChange={e => { setCreateForm({...createForm, name : e.target.value})}} />
          </div>
          <div className={'create__field'}>
            <label className={'create__label'}> Telefoon nummer </label>
            <input className={'create__title'} value={createForm.phone} onChange={e => { setCreateForm({...createForm, phone : parseInt(e.target.value)})}} />
          </div>
          <textarea value={createForm.description} onChange={e => { setCreateForm({...createForm,description : e.target.value})}} placeholder='Het verhaal van Bram Ladage begon in 1967, met een druk bezochte patatkraam op de markt van Rotterdam.
            Bram: ”Ik ben op de markt opgegroeid. Vier uur of half vijf opstaan en dan keihard aanpoten tussen de klapperende zeilen. Vanaf mijn elfde hielp ik mijn vader met de patat, vanaf mijn zestiende stond ik bij mijn moeder tussen de stoffen. Dat vond ik maar niks. Twee jaar later had ik mijn eigen patatkraam.
            Inmiddels is Bram Ladage uitgegroeid tot een franchiseformule met 30+ filialen in Rotterdam en omstreken!'>
          </textarea>
        </div>
      )}
      {currentPage === "menu" && (
          <div className={"create__menu"}>
            {menus.map((menu, key) => {
              return <MenuCategory menu={menu} edit={true} key={key} onCreate={(e)=> {menuUpdate(e, menu)}} />   
            })}
          </div>
      )}
        <div className="create__footer button" onClick={create}>
          sla op
        </div>
      </div>
    </div>
  );
}