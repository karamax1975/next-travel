import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import SliderOffer from '../sliders/sliderOffers/sliderOffers';
import { _getDataFromAPI } from '../../lib/client/getData';
import TourList from '../torursList/toursList'
import ButtonMore from '../buttons/buttonsMore';
import { RESET_FILTER } from '../../reducers/actions/action_popularOffers'



export default function PopularOffers({ titleSection, tabs }) {
  const [numberTours, setNumberTours] = useState(8);
  const [arrayTours, setArrayTours] = useState([]);
  const [allTours, setAllTours] = useState([])

  const selectFilter = useSelector(state => state.popularOffers.filter)

  const dispatch = useDispatch();

  useEffect(() => {
    let controller = new AbortController();
    async function getTours(){
      const response = await fetch(`api/tours`, {signal: controller.signal});
      return response.json()
    }

    getTours().then(data => {
      setAllTours(data)
      // для рендера списка туров забираю массив равный numberTours 
      getListTours(data, numberTours).then(data => {
        setArrayTours(data)
      })
    })
    return () => {
      // сбрасываю в сторе popularOffers.filter
      dispatch(RESET_FILTER())
      controller.abort()
    }
  }, [])

  useMemo(() => {
    const arrFiltred = allTours.filter((item, index) => {
      if (selectFilter) {
        return index < numberTours && item.type == selectFilter
      }
      else return index < numberTours

    })
    setArrayTours(arrFiltred)
  }, [numberTours, selectFilter])


  async function getListTours(arr, numberTours) {
    return await arr.filter((element, index) => index < numberTours);
  }

  function LoadMore(e) {
    e.preventDefault()
    setNumberTours(numberTours + 8)
  }


  return (
    <section className="popularOffers">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="section-title">{titleSection}</h5>
          </div>
        </div>
        <SliderOffer tabs={tabs}/>
        <TourList tours={arrayTours} col={'col4'} />
        <ButtonMore
          name="Загрузить еще"
          callBack={LoadMore}
        />
      </div>
    </section>
  )
}