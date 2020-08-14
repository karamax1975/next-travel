import Head from 'next/head';
import { MainLayout } from '../layout/MainLayout';
import Link from 'next/link';
import ReactDOM from 'react-dom';

import WigetFindTours from '../components/wiget_findTours/index';


export default function Index() {
  return (
    <MainLayout title={'Index'}> 
      {/* <h1>Index</h1>
      <Link href={'/about'}><a>About</a></Link> */}
      
      <div className="container">
        <WigetFindTours/>
      </div>
    </MainLayout>
  );
}
