import Router from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


import { MainLayout } from "../../layout/MainLayout";
import Loader from '../../components/loaderResult';
import ToursList from './toursList';

export default function Result({list}) {

  const [loader, setLoader] = useState(useSelector(state => state.wiget_SearchTours.search));

  const adultTourists = useSelector(state => state.wiget_SearchTours.tourists.adults);
  const childTourists = useSelector(state => state.wiget_SearchTours.tourists.child);
  const typeType =  useSelector(state=>state.wiget_SearchTours.type);
  const typeCountry =  useSelector(state=>state.wiget_SearchTours.country);
  const typeDate =  useSelector(state=>state.wiget_SearchTours.date);
  const [arrTours, setArrTours] = useState([]);

  useEffect(() => {
    setArrTours(list);
    setLoader(false);
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

// Result.getInitialProps = async()=>{
//   const uri = "mongodb+srv://max:German2002@karamax.idcis.mongodb.net";
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//   function _bd(){
//     return 10
//   }
//   const response = await fetch("http://localhost:4200/tours");
//   const list = await response.json();
//   return {
//     list,
//     _bd
//   };
// }



// client.connect(err => {
//   const db = client.db("travel");

//   const tours = async () => {
//     const data = await db.collection(collect).find({}).toArray();
//     client.close();
//     return data
//   }

//   return tours().then(data => console.log(data))

// });