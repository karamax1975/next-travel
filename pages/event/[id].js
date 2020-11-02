export default function Event({ event }) {

  console.log(event);
  return (
    <>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
    </>
  )
}

Event.getInitialProps = async (context) => {
  const response = await fetch(`${process.env.PATH}api/getEvent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: context.query.id
  })
  const event = await response.json()
  return {
    event
  }
}