import Head from 'next/head';
import IndexLayout from '../layout/indexLayout';
import Link from 'next/link';
import ReactDOM from 'react-dom';



import WigetFindTours from '../components/wiget_findTours/index';
import SlideRow from '../components/sliders/sliderRow/sliderRow';



export default function Index() {

  // ---- Серверный код
  // if (!process.browser) {
    
  //   console.log('dfdffd');

  // }

  return (
    <IndexLayout title={'Index'}>
      <WigetFindTours />
      <SlideRow titleSection={'Туда, где всегда тепло'} />

    </IndexLayout>
  );
}
