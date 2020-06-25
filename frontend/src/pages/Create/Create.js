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
    priceRange: 0,
    // email: '',
    // street: '',
    // zip: '',
    // city: '',
    // countryCode: '',
    // leveled: false,
    // dogFriendly: false,
    logo: '',
    // tags: []
  });

async function create (){
  await api(`restaurants`, {data: {attributes:createForm,}} )
  .then(({data}) => { 
   history.push(`/restaurant/${data.data.attributes._id}`);
  })
}
  return (
    <div className={"container"}>
      <div className={"create"}>
        <div className={"create__header"}>
        </div>
        <div className={"create__info"}>
          <h2 className={"create__info-title"}>Restaurant aanmaken:</h2>
          <div className={'create__field'}>
            <label className={'create__label'}>Naam</label>
            <input className={'create__title'} value={createForm.name} onChange={e => { setCreateForm({...createForm, name : e.target.value})}} />
          </div>
          <div className={'create__field'}>
            <label className={'create__label'}>Telefoonnummer</label>
            <input className={'create__title'} value={createForm.phone} onChange={e => { setCreateForm({...createForm, phone : parseInt(e.target.value)})}} />
          </div>
          <label className={'create__label'}>Omschrijving</label>
          <textarea value={createForm.description} onChange={e => { setCreateForm({...createForm,description : e.target.value})}} placeholder='Het verhaal van Bram Ladage begon in 1967, met een druk bezochte patatkraam op de markt van Rotterdam.
            Bram: ”Ik ben op de markt opgegroeid. Vier uur of half vijf opstaan en dan keihard aanpoten tussen de klapperende zeilen. Vanaf mijn elfde hielp ik mijn vader met de patat, vanaf mijn zestiende stond ik bij mijn moeder tussen de stoffen. Dat vond ik maar niks. Twee jaar later had ik mijn eigen patatkraam.
            Inmiddels is Bram Ladage uitgegroeid tot een franchiseformule met 30+ filialen in Rotterdam en omstreken!'>
          </textarea>
          <div className={'create__field'}>
            <label className={'create__label'}>Prijsklasse (1-3)</label>
            <input className={'create__title'} type="text" pattern="[0-9]*" value={createForm.priceRange} onChange={e => { setCreateForm({...createForm, priceRange : parseInt(e.target.value)})}} />
          </div>
          <div className={'create__field'}>
            <label className={'create__label'}>Afbeeldinglink</label>
            <input className={'create__title'} value={createForm.logo} onChange={e => { setCreateForm({...createForm, logo : e.target.value})}}/>
          </div>
        </div>
        <div className="create__footer button" onClick={create}>Opslaan</div>
      </div>
    </div>
  );
}