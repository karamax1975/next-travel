import Router from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

import { MainLayout } from "../../layout/MainLayout";
import Loader from '../../components/loaderResult';
import getTours from '../../inc/getTours';
import ToursList from './toursList';

export default function Result() {

  const [loader, setLoader] = useState(useSelector(state => state.wiget_SearchTours.search));

  const adultTourists = useSelector(state => state.wiget_SearchTours.tourists.adults);
  const childTourists = useSelector(state => state.wiget_SearchTours.tourists.child);
  const [arrTours, setArrTours] = useState([]);

  useEffect(() => {
    getTours().then(res => {
      setArrTours(res.tours);
      setLoader(false);
    });
  }, [])

  return (
    <MainLayout title={"Results"}>

      <div className="container">
        <div className="row">
        <div className="col-lg-3">
            filters
        </div>
        <div className="col-lg-9">
            <h1>Results</h1>
            {loader ? <Loader /> :
              <ToursList
                adults={adultTourists}
                child={childTourists}
                tours={arrTours}

              />}
          </div>

        </div>



      </div>
    </MainLayout>
  );
}


