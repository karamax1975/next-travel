import { useState, useEffect, useMemo } from "react";
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useDispatch } from 'react-redux';


import config from './../../config.json';
import {_getDataFromAPI} from '../../inc/getData'
import { MainLayout } from "../../layout/MainLayout";
import Loader from '../../components/loaderResult';
import ToursList from '../../components/torursList/toursList';
import InfoSearch from '../../components/rezultPage/infoSearch';
import filtersTours from '../../components/rezultPage/filtersTours';
import NoRezult from '../../components/rezultPage/noRezult';
import filterTags from '../../components/rezultPage/filterTags';

import { SET_SEARCH, SET_COUNTRY, SET_TYPE, SET_DATE, SET_ADULTS, SET_CHILD, CLEAR_TAGS } from '../../reducers/actions/action_wigetSearcTour';


export default function Result() {

  const {API} = config;
  const dispatch = useDispatch();
  const adultTourists = useSelector(state => state.wiget_SearchTours.adults);
  const childTourists = useSelector(state => state.wiget_SearchTours.child);
  const typeType = useSelector(state => state.wiget_SearchTours.type);
  const typeCountry = useSelector(state => state.wiget_SearchTours.country);
  const typeDate = useSelector(state => state.wiget_SearchTours.date);
  const tags = useSelector(state => state.wiget_SearchTours.tags);

  const [arrTours, setArrTours] = useState([]);
  const unixDate = Number(typeDate != null ? Number(moment(typeDate, 'DD.MM.YYYY').format('x')) : moment().format('x'));

  const [load, setLoad] = useState(false);
  const [findTour, setFindTour] = useState(false)


  
  useEffect(() => {
     _getDataFromAPI(API[0]).then(data=>{
      setArrTours(data);
      setLoad(true)
     })
     return ()=>{
       // размонтирование компонента---------------------

       // обнуляю фильтры
       dispatch(SET_SEARCH(false))
       dispatch(SET_ADULTS(2))
       dispatch(SET_CHILD(0))
       dispatch(SET_COUNTRY(null))
       dispatch(SET_TYPE(null))
       dispatch(SET_DATE(null))
       dispatch(CLEAR_TAGS())

      // -------------------------
    }
  }, [])


  useMemo(() => {
    const arrfiltersValue = [];
    arrfiltersValue.push(typeType);
    arrfiltersValue.push(typeCountry);
    arrfiltersValue.push(unixDate);
    
    if (load) {
      let rez = filtersTours(arrTours, arrfiltersValue);
      if (tags.length > 0) {
        rez = filterTags(rez, tags)
      }
      if (rez.length > 0) {
        setFindTour(true)
        setArrTours(rez);
      }
      
    }
    
  }, [load])


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
              tag={tags}
            />
            {!load 
              ?<Loader />
              :''
            }
            {!findTour&&load
              ?<NoRezult />
              :<ToursList
                adults={adultTourists}
                child={childTourists}
                tours={arrTours}
              />
              }

          </div>
        </div>
      </div>

    </MainLayout>
  )
}


// Result.getInitialProps = async () => {
//   const response = await fetch("/api/tours");
//   const list = await response.json();
//   return {
//     list,
//   };
// };