import Link from 'next/link';

export default function ToursList({ tours, amountTours }) {

  

  return (
    <>
      {tours.map((tour, index) => {
        if (index < amountTours) {
          return (
            <div className="col-lg-3" key={tour.id}>
              <Link href={`/tour/[id]`}
                as={`/tour/${tour.id}`}
              >
                <a >
                  <div className="tourCard">
                    <div className="tourPreview">
                      <img src={tour.imgUrl} />
                    </div>
                    <div className="tourDescription">
                      <h5 className="tourTarget">
                        {tour.town}, {tour.country}
                      </h5>
                      <p className="tourDuration">
                        {tour.number}, {tours.duration} дней
                      </p>
                      <h5 className="tourPrice">от {tour.price} руб.</h5>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        }
      })}
    </>
  );
}
