import Head from 'next/head';
import IndexLayout from '../layout/indexLayout';
import Link from 'next/link';
import ReactDOM from 'react-dom';



import WigetFindTours from '../components/wiget_findTours/index';
import SlideRow from '../components/sliders/sliderRow/sliderRow';
import PopularOffers from '../components/popularOffers/index';
import CalendarOfEvents from '../components/calendarOfEvents/index'





export default function Index({dataSliderHeader, dataSliderRow, PopularOffersTabs}) {

  // ---- Серверный код
  // if (!process.browser) {
    
  //   console.log('dfdffd');

  // }

  

  return (
    <IndexLayout title={'Index'} data={dataSliderHeader}>
      {/* <WigetFindTours />
      <SlideRow titleSection={'Туда, где всегда тепло'}  data={dataSliderRow}/>
      <PopularOffers titleSection={'Популярные предложения'} tabs={PopularOffersTabs}/>
      <CalendarOfEvents titleSection={'Календарь событий'}/> */}
    </IndexLayout>
  );
}

Index.getInitialProps = async ()=>{

  const responseHeaderSlider = await fetch(`${process.env.PATH}api/indexSlider`);
  const slideJson = await responseHeaderSlider.json();
  const responseSliderRow = await fetch(`${process.env.PATH}api/sliderRow`);
  const SliderRowJson = await responseSliderRow.json();
  const responseTabSliderRow = await fetch(`${process.env.PATH}api/sliderRow_tab`);
  const TabSliderRow = await responseTabSliderRow.json();

  return {
    dataSliderHeader:slideJson,
    dataSliderRow:SliderRowJson,
    PopularOffersTabs:TabSliderRow
  }
}