import TitleFilter from '../filters/titleFilter/titleFilter'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EVENTS_SET_FILTER, EVENTS_RESET_FILTER} from '../../reducers/actions/action_popularEvents';


export default function CalendarOfEvents({ titleSection }) {

  const dispatch = useDispatch()
  const [arrFilters, setArrFilters]= useState([]);
  const [arrEvents, setArrEvents]=useState([]);
  const plaseholder = useSelector(store => store.popularEvents.plaseholder);

  useEffect(() => {
    const getFilters = async (filter)=>{
      const response = await fetch('api/events');
      const responseJson= await response.json();
      const rezult = [];
      responseJson.forEach(item=>{
        rezult.push(item[filter])
      })
      return Array.from(new Set(rezult))
    }
    async function getEvents (){
      const response = await fetch('api/events');
      return await response.json();
    }

    getFilters('country').then(data=>{
      setArrFilters(data)
    })
    getEvents().then(data=>setArrEvents(data))


    return () => {
      dispatch(EVENTS_RESET_FILTER())
    }
  }, [])
  
  function setFilter(element) { // выбор фильтра из списка
    dispatch(EVENTS_SET_FILTER(element))
  }
  function resetFilter(){
    dispatch(EVENTS_RESET_FILTER());
  }


  const storeEvents = useSelector(store => store.popularEvents);

  return (
    <section className="CalendarOfEvents">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="multiple-Title">
              <h5 className="section-title">{titleSection}</h5>
              <TitleFilter
                plaseholder={plaseholder}
                action={setFilter}
                actionReset={resetFilter}
                data={arrFilters} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}