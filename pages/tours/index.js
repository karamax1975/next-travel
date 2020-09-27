import { useState, useEffect } from "react";
import ToursList from '../../components/torursList/toursList';

export default function Tours({ tours }) {
  const [numberOfToursInPage, setNumberOfToursInPage] = useState(24);

  return (
    <div className="container">
      <div className="row">
        <h1>Туры</h1>
        <ToursList tours={tours} amountTours={numberOfToursInPage}/>
      </div>
      {/* <style global jsx>{`
        .tourPreview img {
          max-width:100%;
        }
      `}</style> */}

      
    </div>
      

  );
}

Tours.getInitialProps = async () => {
  const response = await fetch("http://localhost:3000/api/tours");
  const tours = await response.json();
  return {
    tours,
  };
};


