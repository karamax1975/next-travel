import React, { useState, useEffect } from "react";
import Router from 'next/router';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { SET_SEARCH, SET_COUNTRY, SET_TYPE, SET_DATE, SET_ADULTS, SET_CHILD } from '../../reducers/actions/action_wigetSearcTour';

import {_getDataFromAPI} from '../../lib/client/getData';
import config from '../../config.json';
import StringInput from '../inputs/stringInput';
import Calendar from "./input_calendar";
import InputNumberOfTourists from './inputNumberOfTourists';
import TagsList from './tagsList'

const {wigetSelectTours} = config;


export default function WigetFindTours() {


  const dispatch = useDispatch();

  const [countryPlaseholder, setCountryPlaseholder] = useState("Выберите страну");
  const [typeTourPlaseholder, setTypeTourPlaseholder] = useState("Тип тура");


  const [date, setDate] = useState({ // дата тура
    select: useSelector(state => state.wiget_SearchTours.date),
    textPlaceholder: "Дата тура",
  })
  const [tourists, setTourists] = useState({
    adults: useSelector(state => state.wiget_SearchTours.adults),
    child: useSelector(state => state.wiget_SearchTours.child)
  })

  const [touristPlaseholder, setTouristPlaseholder] = useState(`${tourists.adults} взрослых, без детей`);
  const [listCountry, setListCountry] = useState([]);
  const [listType, setListType] = useState([]);


  const [redirect, setRedirect] = useState(false);
  function Search() {
    dispatch(SET_SEARCH(true))
    dispatch(SET_ADULTS(tourists.adults))
    dispatch(SET_CHILD(tourists.child))
    setRedirect(true);
  }

  useEffect(() => {

    _getDataFromAPI(wigetSelectTours[0]).then(country=>{
      setListCountry(country)
    });
    _getDataFromAPI(wigetSelectTours[1]).then(type=>{
      setListType(type)
    });
    
  }, []);


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

    if (typeof (value) == 'object' && value !== null) {
      dispatch(SET_COUNTRY(value.country))
      setCountryPlaseholder(value.country)
    }
    if (typeof (value) == 'string') {
      dispatch(SET_COUNTRY(value))
      setCountryPlaseholder(value)
    }
    if (value === null) {
      dispatch(SET_TYPE(null))
    }
  }

  function getUserSelectTypeTour(value) {
    // Получаю тип тура
    if (typeof (value) == 'object' && value !== null) {
      dispatch(SET_TYPE(value.type))
      setTypeTourPlaseholder(value.type)
    }
    if (typeof (value) == 'string') {
      dispatch(SET_TYPE(value))
      setTypeTourPlaseholder(value)
    }
    if (value === null) {
      dispatch(SET_TYPE(null))
    }
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

    const stringAdults = adults > 1 ? 'взрослых' : 'взрослый';
    const numberChild = child > 0 ? child : ''

    let stringChild = child ?? 'без детей'
    switch (child) {
      case 0: {
        stringChild = 'без детей'
        break
      }
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
    setTouristPlaseholder(`${adults} ${stringAdults}, ${numberChild} ${stringChild}`)
  }

  return (
    <div className="container">
      <div className="wiget_findTour">
        <div className="wrapper">
          <div className="findTour_filtrs">
            <h4>Поиск туров</h4>
            <TagsList/>
          </div>
          <div className="findTour_inputs">
            <div className="input-wrapper" >
              <StringInput
                list={listCountry}
                type={wigetSelectTours[0]}
                placeholder={countryPlaseholder}
                getValue={getUserSelectCountry}
              />
            </div>
            <div className="input-wrapper" >
              <StringInput
                list={listType}
                type={wigetSelectTours[1]}
                placeholder={typeTourPlaseholder}
                getValue={getUserSelectTypeTour}
              />
            </div>
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
    </div>
  );
}
