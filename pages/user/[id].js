export default function User({ user, tours }) {




  // console.log(tours);

  return (
    <h1>Hello {user}</h1>
  )
}

User.getInitialProps = async (context) => {
  // console.log(process.env);
    const request = await fetch('api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: context.query.id

    })
    const data = await request.json();

    return {
      user: data.name,
      tours: data.tours
    }


}


