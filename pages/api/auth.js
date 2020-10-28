import nextConnect from 'next-connect';
const MongoClient = require("mongodb").MongoClient;
import config from '../../config.json';



const connect = nextConnect();
const mongoClient = new MongoClient(process.env.PATH_DB, { useNewUrlParser: true, useUnifiedTopology: true, });



connect.post((req, res) => {

  mongoClient.connect((error, client) => {
    if (!error) {
      const db = client.db(config.collection);


      const collection = db.collection("users");
      collection.findOne({ hash: req.body }, (err, data) => {

        if (!err) {

          const collectionTour = db.collection('tours');
          const userName = data.name
          collectionTour.find({ autor: data.login }).toArray().then(tours => {

            res.send({
              tours:tours,
              name:userName
            })
            res.end('OK')
            client.close()
          })
        }
        else console.log(err);


      })

    }
  })

  // console.log(req.body);
  // console.log('ddfdd');

})


export default connect

