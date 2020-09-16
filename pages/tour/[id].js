import ToursList from "../../components/torursList/toursList";

export default function Tour({ tour }) {
  const [item]=tour;
  return (
    <>
      <img src={item.imgUrl}></img>
      <h1>{item.country}</h1>
    </>
  );
}

Tour.getInitialProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/tours`);
  const getTour = await res.json();
  const tour = getTour.filter(a=>a._id==context.query.id)
  return {
    tour
  }
}
