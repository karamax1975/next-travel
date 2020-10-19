import config from './../../config.json'
import TourCard from '../tourCard/tourCard'
export default function ToursList({tours=[], adults=config.adults, child=config.child }) {


  
  const itemsTours = tours.map(item => {
    return (
      <TourCard key={item._id}
        adults={adults}
        child={child}
        tour = {item}
      />
    )
  })

  return (
    <div className="tour-list">
      {itemsTours}
    </div>
  )

}
