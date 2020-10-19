import Link from 'next/link';
import Liked from './liked';
import config from './../../config.json'


export default function tourCard({tour, adults=config.adults, child=config.child}) {

    const {priceAdult, priceChild}=config;

    const prise = String(priceAdult*adults*tour.price+priceChild*child*tour.price) // цена за поездку
    const reg = /\B(?=(\d{3})+(?!\d))/g;
    const priceOut = prise.replace(reg, ' ') // вывод цены за поездку

    return (
        <div className={`card-wrapper`}>
            <Link href={`/tour/[id]`} as={`/tour/${tour._id}`}>
                <a>
                    <div className="tour-card" >
                        <div className="img_wrapper">
                            <img src={tour.imgUrl}></img>
                        </div>
                        <div className="card-description">
                            <h5>{tour.town}, {tour.country}</h5>
                            <span>{tour.duration} ночей</span>
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

