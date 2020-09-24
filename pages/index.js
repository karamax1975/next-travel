import Head from 'next/head';
import IndexLayout from '../layout/indexLayout';
import Link from 'next/link';
import ReactDOM from 'react-dom';

import WigetFindTours from '../components/wiget_findTours/index';


export default function Index() {
  return (
 
    <IndexLayout title={'Index'}>
        <WigetFindTours/>
    </IndexLayout>
  );
}
