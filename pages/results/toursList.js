import { useState, useEffect} from "react";
import Link from 'next/link';
import moment from 'moment';


import TourCard from '../../components/tourCard/tourCard'

export default function ToursList({ tours, filter1, filter2, date, adults, child }) {

  function filterCountry(array, type, string){

    const filtered = array.filter((item)=>{
      if(string=='') return item;
      else return item[type]==string
    })
    return filtered;
}

function filterDate(array, findDate){
  if(findDate=='') return array
  else{
    return array.filter((item)=>{
      const dateSearch=moment(findDate, 'DD.MM.YYYY').format('x');
      const dateStart=moment(item.start).format('x')
      const dateEnd=moment(item.end).format('x')
  
      return dateStart<dateSearch && dateEnd>dateSearch
    }  )
  }

}

  const [arrTours, setArrTours] = useState([]);

  useEffect(() => {
    setArrTours(tours)
    const resultCountry = filterCountry(tours, 'country', filter1);
    const resultType = filterCountry(resultCountry, 'type', filter2);
    const resultDate = filterDate(resultType, date);
    setArrTours(resultDate)
  }, [])
  
  
  const itemsTours = arrTours.map(item => {
    return (
      <TourCard key={item._id}
        adults={adults}
        child={child}
        duration={item.duration}
        tour = {item}
      />
    )
  })
  const empty =
    <>
      <h1>Ничего не найдено</h1>
      <Link href={"/"}>
        <a>Новый поиск</a>
      </Link>
    </>

  return (
    <div className="tour-list">
      {itemsTours.length > 0 ? itemsTours : empty}
    </div>
  )
}
