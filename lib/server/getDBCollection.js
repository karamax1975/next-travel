import nextConnect from 'next-connect';
import config from '../../config.json';
import Mongo from 'mongodb';

const Client = Mongo.MongoClient;
const connect = nextConnect();
const mongoClient = new Client(config.db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

function getDBCollection (nameCollection, callback){
  mongoClient.connect(function (err, client) {
    if (!err) {
      const db = client.db(config.collection);
      callback(db.collection(`${nameCollection}`))
    }
    else{
      console.log(err);
    }

  })

}

export default getDBCollection

