import Link from 'next/link';

export default function tourCard({ imgUrl, country, town, adults, duration, child, id, price }) {

    const reg = /\B(?=(\d{3})+(?!\d))/g;
    const priceOut = price.replace(reg, ' ')

    return (
        <div className='card-wrapper'>
            <Link href={`/tour/[id]`} as={`/tour/${id}`}>
                <a>
                    <div className="tour-card" >
                        <div className="img_wrapper">
                            <img src={imgUrl}></img>
                        </div>
                        <div className="card-description">
                            <p>{town}, {country}</p>
                            <span>{duration} ночей</span>
                            <div className="card-description__down">
                                <p>от {priceOut} руб.</p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

