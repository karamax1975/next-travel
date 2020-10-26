export default function User({ user, tours }) {




  // console.log(tours);

  return (
    <h1>Hello {user}</h1>
  )
}

User.getInitialProps = async (context) => {
    const request = await fetch('http://localhost:3000/api/auth', {
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


