import ToursList from "../../components/torursList/toursList";

export default function Tour({ tour }) {
  return (
    <>
      <img src={tour.imgUrl}></img>
      <h1>{tour.country}</h1>
    </>
  );
}

Tour.getInitialProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/tours`);
  const tour = await res.json();
  return {
    tour:tour[context.query.id-1]
  }
}
