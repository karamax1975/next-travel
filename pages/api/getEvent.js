import nextConnect from 'next-connect';
import connect_DB from '../../lib/server/connect_DB';
const ObjectId = require('mongodb').ObjectID;

const connect = nextConnect();

connect.post((req, res)=>{
  connect_DB('events',(collection, client)=>{
    // console.log(req.body);
    collection.find({_id:ObjectId(req.body)}).toArray().then(data=>{
      res.send(data[0])
      res.end()
      client.close()
    })
  })
})



export default connect;