import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_TOURS } from '../../reducers/actions/action_userTours'
import ListUserTours from './../../components/ListUserTours/index'



export default function User({ user, tours }) {

  const dispatch = useDispatch();



  const [arrTours, setArrTours] = useState(tours);
  const storeTours = useSelector(store => store.userTours);


  useEffect(() => {
    dispatch(LOAD_TOURS(arrTours))
    
  }, [])



  console.log(storeTours);


  return (
    <div className="container">
      <h1>Hello {user}</h1>
      <ListUserTours tours={arrTours} />
    </div>


  )
}

User.getInitialProps = async (context) => {
  const request = await fetch(`${process.env.PATH}api/auth`, {
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


