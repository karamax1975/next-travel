import React, { useState, useEffect } from "react";
import Router from 'next/router';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import {SET_SEARCH, SET_COUNTRY, SET_TYPE, SET_DATE, SET_ADULTS, SET_CHILD} from '../../reducers/actions/action_wigetSearcTour'
import Input from "./input_typeTour";
import Calendar from "./input_calendar";
import InputNumberOfTourists from './inputNumberOfTourists';


export default function WigetFindTours() {
  

  const dispatch = useDispatch();

  const [country, setCountry] = useState({ // страна тура
    select:useSelector(state=>state.wiget_SearchTours.country),
    textPlaceholder: "Выберите страну"
  });

  const [type, setType] = useState({ // тип тура
    select: useSelector(state=>state.wiget_SearchTours.type),
    textPlaceholder: "Тип тура",
  });

  const [date, setDate] = useState({ // дата тура
    select: useSelector(state=>state.wiget_SearchTours.date),
    textPlaceholder: "Дата тура",
  })
  const [tourists, setTourists] = useState({
    adults: useSelector(state=>state.wiget_SearchTours.tourists.adults),
    child: useSelector(state=>state.wiget_SearchTours.tourists.child)
  })

  const [touristPlaseholder, setTouristPlaseholder] = useState(`${tourists.adults} взрослых, без детей`);

  const [redirect, setRedirect] = useState(false);
  function Search() {
    dispatch(SET_SEARCH(true))
    dispatch(SET_ADULTS(tourists.adults))
    dispatch(SET_CHILD(tourists.child))     
    setRedirect(true);
  }



  useEffect(() => { // редирект на страницу выгрузки
    if (redirect) {
      Router.push('/results')
    }
  }, [redirect]);
  





  // useEffect(()=>{
  //     fetch("http://localhost:4200/country")
  //     .then(response=>response.json())
  //     .then(json=>setCountry(old=>{
  //       return{
  //         ...old,
  //         array:json
  //       }
  //     }));
  // },[])

  function getUserSelectCountry(value) {
    // получаю выбор страны
    setCountry(() => {
      if (value == country.textPlaceholder) {
        dispatch(SET_COUNTRY(''))
        return {
          select: '',
          textPlaceholder: value
        }
      } else {
        dispatch(SET_COUNTRY(value))
        return {
          select: value,
          textPlaceholder: value
        }
      }
    })

    
  }

  function getUserSelectTypeTour(value) {
    // Получаю тип тура
    setType(() => {
      if (value == type.textPlaceholder) {
        dispatch(SET_TYPE(''))
        return {
          select: '',
          textPlaceholder: value,
        }
      } else {
        dispatch(SET_TYPE(value))
        return {
          select: value,
          textPlaceholder: value
        }
      }
    })
    
  }


  function getDateTour(e) { // получаю дату тура
    if (e.target.dataset.value) {
      setDate({
        select: e.target.dataset.value,
        textPlaceholder: e.target.dataset.value
      })
      dispatch(SET_DATE(e.target.dataset.value))
    }

  }

  function getTourist(adults, child) {
    setTourists(state => {
      return {
        ...state,
        adults,
        child
      }
    })

    const srtingAdults = adults > 1 ? 'взрослых' : 'взрослый';
    const numberChild = child > 0 ? child : ''

    let stringChild = child ?? 'без детей'
    switch (child) {
      case 1: {
        stringChild = 'ребенок'
        break
      }
      case 2:
      case 3:
      case 4: {
        stringChild = 'ребенка'
        break
      }
      case 5:
      case 6: {
        stringChild = 'детей'
        break
      }
      default: {
        stringChild = 'без детей'
        break
      }
    }
    setTouristPlaseholder(`${adults} ${srtingAdults}, ${numberChild} ${stringChild}`)
  }

  return (
    <div className="wiget_findTour">
      <div className="wrapper">
        <div className="findTour_filtrs">
          <h4>Поиск туров</h4>
          <div className="filtrs-list">
            <div className="filtrs-list_item"><p>Горячие туры</p></div>
            <div className="filtrs-list_item"><p>Горячие туры</p></div>
            <div className="filtrs-list_item"><p>Горячие туры</p></div>
          </div>
        </div>
        <div className="findTour_inputs">
          <Input
            getUserSelect={getUserSelectCountry}
            type={"country"}
            name={country.textPlaceholder}
          />
          <Input
            getUserSelect={getUserSelectTypeTour}
            type={"type"}
            name={type.textPlaceholder}
          />
          <Calendar
            name={date.textPlaceholder}
            getUserSelect={getDateTour}
          />
          <InputNumberOfTourists
            name={touristPlaseholder}
            getUserSelect={getTourist}
          />
        </div>
      </div>
      <button onClick={Search}
        className="wiget_findTout_submit" type="submit">
        <img src="/img/icon_search_white.svg" />
        <span>Найти</span>
      </button>
    </div>
  );
}


