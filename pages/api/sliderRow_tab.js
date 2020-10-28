import nextConnect from 'next-connect';
import connect_DB from '../../lib/server/connect_DB';


const connect = nextConnect();

connect.get((req, res) => {
  connect_DB('slideRow_tab', (collection, client) => {
    collection.find({}).toArray().then(data => {
      res.send(data);
      res.end();
      client.close();
    });
    
  })
})
export default connect