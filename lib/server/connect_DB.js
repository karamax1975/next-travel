import Mongo from 'mongodb';
import config from '../../config.json'



export default function connect_DB(collection, callBack) {
  const Client = Mongo.MongoClient;


  const mongoClient = new Client(process.env.PATH_DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  mongoClient.connect((err, client) => {
    if (!err) {
      const db = client.db(config.collection);
      const collect = db.collection(`${collection}`)
      callBack(collect, client);

    }
    else console.log(err)


  })

}







