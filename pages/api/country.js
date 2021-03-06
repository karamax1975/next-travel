
import nextConnect from 'next-connect';
import connect_DB from '../../lib/server/connect_DB';
import hash from '../../lib/server/setHash'



const connect = nextConnect();

connect.get((req, res) =>{

  connect_DB('tours',(collection, client)=>{
    const arrayCountry = collection.distinct('country');
    arrayCountry.then(data=>{
      const array = data.map(item=>{
        const id=hash();
        return {
          _id:id,
          country:item
        }
      })
      res.send(array);
      res.end();
      client.close();
    })
  })
})

export default connect