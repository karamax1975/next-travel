import ToursList from "../../components/torursList/toursList";

export default function Tour({ tour }) {
  return (
    <>
      <img src={tour.imgUrl}></img>
      <h1>{tour.country}</h1>
    </>
  );
}

Tour.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/tours/${ctx.query.id}`);
  const tour = await response.json();
  return {
    tour,
  };
};
