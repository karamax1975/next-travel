import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';


import SliderOffer from '../sliders/sliderOffers/sliderOffers';
import {_getDataFromAPI} from '../../lib/client/getData';
import TourList from '../torursList/toursList'
import ButtonMore from '../buttons/buttonsMore';



export default function PopularOffers({titleSection}) {
  const [numberTours, setNumberTours]=useState(8);
  const [arrayTours, setArrayTours]=useState([]);
  const [allTours, setAllTours]=useState([])

  const selectFilter = useSelector(state=>state.popularOffers.filter)
  // console.log(selectFilter);

 

  useEffect(()=>{
    _getDataFromAPI('tours').then(data=>{
      setAllTours(data)
    })

    getListTours(numberTours)
    .then(data=>{
      setArrayTours(data);
    })
  },[])

  useMemo(()=>{
    getListTours(numberTours)
    .then(data=>{
      setArrayTours(data)
    })
  },[numberTours])

  useEffect(()=>{
    if(selectFilter){
      filtration(allTours, selectFilter)
    };
  }, [selectFilter])


  async function getListTours(numberTours){
    // загружает массив туров = numberTours
    const response = await fetch('api/tours');
    const data = await response.json();
    return await data.filter((element, index) =>index<numberTours);
    
  }

  function LoadMore(e){
    e.preventDefault()
    setNumberTours(numberTours+8)
  }



  function filtration(arr, filterString){
    const rezult= arr.filter(item=>item.type==filterString);
    setArrayTours(rezult)
  }

  return (
    <section className="popularOffers">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="section-title">{titleSection}</h5>
          </div>
        </div>
        <SliderOffer/>
          <TourList tours={arrayTours} col={'col4'}/>
          <ButtonMore 
          name="Загрузить еще"
          callBack={LoadMore}
          />
      </div>
    </section>
  )
}