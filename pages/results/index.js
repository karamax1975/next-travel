import Router from "next/router";
import { useState, useEffect} from "react";
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

  const stringAdult = adultTourists < 2 ? 'взрослый' : 'взрослых';
  let stringChild = childTourists ?? 'без детей'
  switch (childTourists) {
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


  return (
    <MainLayout title={"Results"}>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            filters
        </div>
          <div className="col-lg-9">
            <div className="rezult-select">
              <h6>Ваш выбор:</h6>
              <p>страна: <span>{typeCountry == '' ? 'все страны' : typeCountry}</span></p>
              <p>тип тура: <span>{typeType == '' ? 'все туры' : typeType}</span></p>
              <p>дата тура: <span>{typeDate == '' ? 'открытая дата' : typeDate}</span></p>
              <p>туристы: <span>{adultTourists} {stringAdult}, {childTourists > 0 ? `${childTourists} ${stringChild}` : stringChild}</span></p>
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
  const response = await fetch("/api/tours"); 
  const list = await response.json();
  return {
    list,
  };
};