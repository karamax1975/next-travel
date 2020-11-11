import Link from 'next/link';
import Liked from './liked';
import config from './../../config.json'
import { useState } from 'react';


export default function tourCard({ tour, adults = config.adults, child = config.child }) {

  const { priceAdult, priceChild } = config;
  // const [hot, setHot] = useState(false)
  const prise = String(priceAdult * adults * tour.price + priceChild * child * tour.price) // цена за поездку
  const reg = /\B(?=(\d{3})+(?!\d))/g;
  const priceOut = prise.replace(reg, ' ') // вывод цены за поездку


  const tags = tour.tags.split(',');
  let hotIcon = ''
  tags.forEach(element => {
    if (element == "Горячие туры") {
      hotIcon = (
        <div className="tagsIcon">
          <div className="icon-hot">
            <svg viewBox="0 0 7 9">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.21841 7.71846C2.30223 8.93488 3.64645 8.98556 3.64645 8.98556C3.64645 8.98556 3.45643 8.81903 3.11862 8.40631C2.78784 7.97912 2.66116 6.92924 2.75969 6.39343C2.89341 5.63317 3.8787 4.21402 3.8787 4.21402C3.8787 4.21402 4.78658 2.7659 4.35024 1.54948C3.91389 0.333067 2.59782 0 2.59782 0C2.59782 0 2.80895 0.115849 2.94971 0.666133C3.09047 1.21642 2.65412 1.89703 2.65412 1.89703C2.65412 1.89703 0.972083 4.16333 0.711684 4.81499C0.556852 5.1915 0.134582 6.50204 1.21841 7.71846ZM3.9846 7.95007C4.86432 8.93479 5.89888 8.99995 5.89888 8.99995C5.89888 8.99995 5.33586 8.64516 5.17399 7.68941C5.07419 7.10014 5.40243 6.5494 5.75626 5.95574C5.97632 5.58653 6.20628 5.20071 6.3493 4.77869C6.72231 3.67813 6.32819 3.04095 5.9763 2.70789C5.62441 2.37482 5.11769 2.23725 5.11769 2.23725C5.11769 2.23725 5.29363 2.43999 5.35697 2.68617C5.42031 2.9251 5.35697 3.19301 5.15991 3.60572C5.04709 3.84201 4.71972 4.28004 4.40102 4.70648C4.16307 5.02486 3.92995 5.33678 3.79457 5.55343C3.48491 6.06028 3.10487 6.96535 3.9846 7.95007Z" />
            </svg>
          </div>
          <span>Hot tour</span>
        </div>
      )
    }
  });

  return (
    <div className='card-wrapper col-lg-3' >
      <Link href={`/tour/[id]`} as={`/tour/${tour._id}`}>
        <a>
          <div className="tour-card" >
            <div className="img_wrapper">
              <img src={tour.imgUrl}></img>
            </div>
            <div className="card-description">
              {hotIcon}
              <div>
                <h5>{tour.town}, {tour.country}</h5>
                <span>{tour.duration} ночей</span>
                <span>{tour.type}</span>
              </div>
              <div className="card-description__down">
                <p>от {priceOut} руб.</p>
                <Liked />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

