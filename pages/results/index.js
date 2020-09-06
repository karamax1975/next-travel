import Router from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


import { MainLayout } from "../../layout/MainLayout";
import Loader from '../../components/loaderResult';
import ToursList from './toursList';

export default function Result({ list }) {


  const [loader, setLoader] = useState(useSelector(state => state.wiget_SearchTours.search));
  const adultTourists = useSelector(state => state.wiget_SearchTours.tourists.adults);
  const childTourists = useSelector(state => state.wiget_SearchTours.tourists.child);
  const typeType = useSelector(state => state.wiget_SearchTours.type);
  const typeCountry = useSelector(state => state.wiget_SearchTours.country);
  const typeDate = useSelector(state => state.wiget_SearchTours.date);
  const [arrTours, setArrTours] = useState([]);

  useEffect(() => {
    setArrTours(list);
    setLoader(false);
  }, [])

  const stringAdult = adultTourists<2?'взрослый':'взрослых'


  return (
    <MainLayout title={"Results"}>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            filters
        </div>
          <div className="col-lg-9">
            <h1>Ваш выбор:</h1>
            <div className="rezult-select">
              <p>{typeCountry == '' ? 'Страна: все страны' : `Страна: ${typeCountry}`}</p>
              <p>{typeType == '' ? 'Тип тура: все туры' : `Тип тура: ${typeType}`}</p>
              <p>{typeDate == '' ? 'Дата тура: открытая дата' : `Дата тура: ${typeDate}`}</p>
              <p>Туристы: {adultTourists} {stringAdult}, {childTourists>0?`${childTourists} ребенок`:'без детей'}</p>
            </div>
            {loader ? <Loader /> :
              <ToursList
                adults={adultTourists}
                child={childTourists}
                tours={arrTours}
                filter1={typeCountry}
                filter2={typeType}
                date={typeDate}
              />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

Result.getInitialProps = async () => {
  const response = await fetch("http://localhost:3000/api/tours"); // 3000/api/tours   //4200
  const list = await response.json();
  return {
    list,
  };
};