import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {SET_FILTER} from '../../../reducers/actions/action_popularOffers';


export default function SliderItem({item, setActive, indexActive, className}) {

const dispatch = useDispatch();

  function activeTypeTour() {
    setActive(indexActive)
    dispatch(SET_FILTER(item.type))
  }
  
  return (
    <div className={className} onClick={activeTypeTour}>
      <div className="offerItem_card">
        <div className="offerItem_card-imgWrapper">
          <img src={`img/${item.img}`}></img>
        </div>
      </div>
      <h3>{item.type}</h3>
    </div>
  )
}