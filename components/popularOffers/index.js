import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import SliderOffer from '../sliders/sliderOffers/sliderOffers';
import { _getDataFromAPI } from '../../lib/client/getData';
import TourList from '../torursList/toursList'
import ButtonMore from '../buttons/buttonsMore';
import { RESET_FILTER } from '../../reducers/actions/action_popularOffers'



export default function PopularOffers({ titleSection }) {
  const [numberTours, setNumberTours] = useState(8);
  const [arrayTours, setArrayTours] = useState([]);
  const [allTours, setAllTours] = useState([])

  const selectFilter = useSelector(state => state.popularOffers.filter)

  const dispatch = useDispatch();

  useEffect(() => {
    _getDataFromAPI('tours').then(data => {
      setAllTours(data)
      // для рендера списка туров забираю массив равный numberTours 
      getListTours(data, numberTours).then(data => {
        setArrayTours(data)
      })
    })
    return () => {
      // сбрасываю в сторе popularOffers.filter
      dispatch(RESET_FILTER())
      setAllTours([])
      setArrayTours([])
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
  }, [numberTours])


  useEffect(() => {
    // если выбран фильтр, фильтрую общий массив туров   
    if (selectFilter) {
      const filtredArrayTours = allTours.filter(item => item.type == selectFilter);
      setArrayTours(filtredArrayTours)
      // filtration(allTours, selectFilter)
    };
  }, [selectFilter])


  async function getListTours(arr, numberTours) {
    return await arr.filter((element, index) => index < numberTours);
  }

  function LoadMore(e) {
    e.preventDefault()
    setNumberTours(numberTours + 8)
  }



  // function filtration(arr, filterString){
  //   const rezult= arr.filter(item=>item.type==filterString);
  //   setArrayTours(rezult)
  // }

  return (
    <section className="popularOffers">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="section-title">{titleSection}</h5>
          </div>
        </div>
        <SliderOffer />
        <TourList tours={arrayTours} col={'col4'} />
        <ButtonMore
          name="Загрузить еще"
          callBack={LoadMore}
        />
      </div>
    </section>
  )
}