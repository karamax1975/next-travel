import { useState, useEffect } from "react";
import Link from 'next/link';
import { filterCountry, filterDate } from './filters'

import TourCard from '../../components/tourCard/tourCard'

export default function ToursList({ tours, filter1, filter2, date, adults, child }) {
  const [arrTours, setArrTours] = useState([]);

  useEffect(() => {
    const resultCountry = filterCountry(tours, 'country', filter1);
    const resultType = filterCountry(resultCountry, 'type', filter2);
    const resultDate = filterDate(resultType, date);
    setArrTours(resultDate)

  }, [])
  
  
  const itemsTours = arrTours.map(item => {
    return (
      <TourCard key={item._id}
        imgUrl={item.imgUrl}
        country={item.country}
        town={item.town}
        adults={adults}
        child={child}
        duration={item.duration}
        id={item.id}
        price={item.price}
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
