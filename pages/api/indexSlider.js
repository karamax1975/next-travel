import nextConnect from 'next-connect';
import Mongo from 'mongodb';

import config from '../../config.json'


const Client = Mongo.MongoClient;
const connect = nextConnect();


const mongoClient = new Client(config.db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

connect.get((req, res) => {
  mongoClient.connect((err, client) => {
    if (!err) {
      const db = client.db(config.collection);
      const collection = db.collection(`${config.sliders[1]}`);
      collection.find({}).toArray()
        .then(data => {
          res.send(data);
          res.end();
        })
    }
    else console.log(err)
  })

})





export default connect