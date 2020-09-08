import Link from 'next/link';
import Liked from './liked';

export default function tourCard({tour, adults, duration, child }) {
    // console.log(tour);
    const reg = /\B(?=(\d{3})+(?!\d))/g;
    const priceOut = tour.price.replace(reg, ' ')

    return (
        <div className='card-wrapper'>
            <Link href={`/tour/[id]`} as={`/tour/${tour.id}`}>
                <a>
                    <div className="tour-card" >
                        <div className="img_wrapper">
                            <img src={tour.imgUrl}></img>
                        </div>
                        <div className="card-description">
                            <h5>{tour.town}, {tour.country}</h5>
                            <span>{duration} ночей</span>
                            <span>{tour.type}</span>
                            <div className="card-description__down">
                                <p>от {priceOut} руб.</p>
                                <Liked/>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

