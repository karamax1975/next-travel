import React, { useState } from "react";
import InputCountry from "./input_country";
import Input from "./input_typeTour";

function WigetFindTours() {
  // выбор типа тура
  const [typePanel, setTypePanel] = useState('Тип тура')
  const [tour, setTour] = useState('');
  // выбор страны
  const [countryPanel, setCountryPanel]=useState('Выберите страну');
  const [country, setCountry]=useState('');

  function getUserSelectCountry(value){ // получаю выбор страны
    setCountryPanel(value);
    if(value==countryPanel) {setCountry('')}
    else setCountry(value);
    console.log(value)
  }

  function getUserSelectTypeTour(value) { // получаю выбор типа тура
    setTypePanel(value);
    if(value==typePanel) { 
      setTour('') // если выбор юзера не совпадает с данными из списка 
    }
    else setTour(value); // юзер выбрал из списка
    console.log(value)
  }

  // console.log(typeTour)  //-------------------
  return (
    <div className="wiget_findTout">
      <Input getUserSelect={getUserSelectCountry}
      type={"country"}
      name={countryPanel}
      />
      <Input
        getUserSelect={getUserSelectTypeTour}
        type={"type"}
        name={typePanel}
      />
    </div>
  );
}

export default WigetFindTours;
