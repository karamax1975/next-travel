import Router from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import moment from 'moment';

import { MainLayout } from "../../layout/MainLayout";
import Loader from '../../components/loaderResult';



import ToursList from '../../components/torursList/toursList';
import InfoSearch from './infoSearch';
import filtersTours from './filtersTours';
import NoRezult from './noRezult';

export default function Result({ list }) {

  

  // const [loader, setLoader] = useState(useSelector(state => state.wiget_SearchTours.search));
  const adultTourists = useSelector(state => state.wiget_SearchTours.tourists.adults);
  const childTourists = useSelector(state => state.wiget_SearchTours.tourists.child);
  const typeType = useSelector(state => state.wiget_SearchTours.type);
  const typeCountry = useSelector(state => state.wiget_SearchTours.country);
  const typeDate = useSelector(state => state.wiget_SearchTours.date);
  const unixDate = Number(typeDate != null ? Number(moment(typeDate, 'DD.MM.YYYY').format('x')) : moment().format('x'))
  const [arrTours, setArrTours] = useState([]);
  const [runLoader, setRunLoader] = useState(true); 
  const [toursLoad, setToursLoad]=useState(false);
  const [arrFilters, setArrFilters] = useState([]);
  const [foundTours, setFoundTours] = useState(false);


  useEffect(() => {
    const arrfiltersValue = [];
    arrfiltersValue.push(typeType);
    arrfiltersValue.push(typeCountry);
    arrfiltersValue.push(unixDate);
    setArrFilters(arrfiltersValue);
  }, [true])

  useEffect(() => {
    if (list.length > 0) {
      setRunLoader(false);
    }
  }, [list])

  useEffect(() => {
    if (!runLoader) {
      const rez = filtersTours(list, arrFilters);
      if(rez.length>0) setFoundTours(true)
      setArrTours(rez);
      setToursLoad(true)
    }
  }, [runLoader])

  return (
    <MainLayout title={"Results"}>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            filters
        </div>
          <div className="col-lg-9">
            <InfoSearch
              country={typeCountry}
              type={typeType}
              date={typeDate}
              adults={adultTourists}
              child={childTourists}
            />
            {runLoader ? <Loader /> :
              <ToursList
                adults={adultTourists}
                child={childTourists}
                tours={arrTours}
              />}
              {!foundTours && toursLoad?<NoRezult/>:''}
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