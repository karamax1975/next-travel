export default function User ({user}){

  console.log(user);

  return (
    <h1>Hello</h1>
  )
}

User.getInitialProps = async (context) => {

  return {
    user:context.query
  }

  // const res = await fetch(`/api/tours`);
  // const getTour = await res.json();
  // const tour = getTour.filter(a=>a._id==context.query.id)
  // return {
  //   tour
  // }
}


