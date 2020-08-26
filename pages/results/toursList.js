import { useState} from "react";


export default function ToursList({tours, adults, child}){
  const [arrTours, setArrTours] = useState([]);
    

      const itemsTours = tours.map(item=>{
        return (
        <div key={item.id} className="tour-item col-lg-3">{item.country}</div>
        )
      }) 

    return ( 
      <div className="tour-list">
        {itemsTours}
      </div>
    )
  }
  