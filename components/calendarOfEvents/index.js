import TitleFilter from '../filters/titleFilter/titleFilter'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListEvents from './listEvents';
import { EVENTS_SET_FILTER, EVENTS_RESET_FILTER } from '../../reducers/actions/action_popularEvents';
import Reset from '../buttons/reset';


export default function CalendarOfEvents({ titleSection }) {

  const dispatch = useDispatch()
  const [arrFilters, setArrFilters] = useState([]);
  const [arrEvents, setArrEvents] = useState([]);
  const [renderEvents, setRenderEvents] = useState([])
  const plaseholder = useSelector(store => store.popularEvents.plaseholder);
  const [counterEvent, setCounterEvent] = useState(6)

  const filter = useSelector(store => store.popularEvents.eventsFilter)

  async function getEvents() {
    const response = await fetch('api/events');
    return await response.json();
  }

  const getFilters = async (filter) => {
    const response = await fetch('api/events');
    const responseJson = await response.json();
    const rezult = [];
    responseJson.forEach(item => {
      rezult.push(item[filter])
    })
    return Array.from(new Set(rezult))
  }


  useEffect(() => {

    getFilters('country').then(data => setArrFilters(data))
    getEvents().then(data => {
      setArrEvents(data)
      const size = arrEvents.filter((item, index) => index < counterEvent)
      setRenderEvents(size)
    })

    return () => dispatch(EVENTS_RESET_FILTER())
  }, [])

  // обработка фильтра, сброс фильтра и подгрузка дополнительных событий.
  useEffect(() => {
    if (filter !== null) {
      const filtred = arrEvents.filter((item, index) => item.country == filter && index < counterEvent)
      setRenderEvents(filtred)
    }
    else {
      const render = arrEvents.filter((item, index) => index < counterEvent)
      setRenderEvents(render)
    }

  }, [filter, arrEvents, counterEvent])

  function setFilter(element) { // выбор фильтра из списка
    dispatch(EVENTS_SET_FILTER(element))
  }
  function resetFilter() {
    dispatch(EVENTS_RESET_FILTER());
  }

  function moreEvents(e) {
    setCounterEvent(counterEvent + 6)
  }

  return (
    <section className="CalendarOfEvents">
      <div className="container">
        <div className="row">
          <div className="col multiple-title">
            <h5 className="section-title">{titleSection}</h5>
            <TitleFilter
              plaseholder={plaseholder}
              action={setFilter}
              data={arrFilters}
            />
            <Reset action={resetFilter}/>
          </div>
        </div>
        <ListEvents data={renderEvents} actionButton={moreEvents} />
      </div>
    </section>
  )
}