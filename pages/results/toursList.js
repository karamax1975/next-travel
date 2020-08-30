import { useState } from "react";
import Link from 'next/link';
import { filterCountry, filterDate } from './filters'

export default function ToursList({ tours, filter1, filter2, date, adults, child }) {
  const [arrTours, setArrTours] = useState([]);

  const resultCountry = filterCountry(tours, 'country', filter1);
  const resultType = filterCountry( resultCountry, 'type', filter2);
  // const resultDate = filterDate(resultType, date);
  

  const itemsTours = resultType.map(item => {
    return (
      <div key={item.id} className="tour-item col-lg-3">
        <img src={item.imgUrl} />
        {item.country}</div>
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
      {itemsTours.length>0?itemsTours:empty}
    </div>
  )
}
