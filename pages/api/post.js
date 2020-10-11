import nextConnect from 'next-connect';
import config from '../../config.json'

const MongoClient = require("mongodb").MongoClient;


const handler = nextConnect();
handler.post((req, res) => {
  const mongoClient = new MongoClient(config.db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  mongoClient.connect((err, client)=>{
    if (!err) {
      const db = client.db(config.collection);
      const collection = db.collection("users");

      collection.find({}).toArray()
        .then(data => {
          const findUser = data.some(user => user.name == req.body.name);
          if (!findUser) {
            return null
            // try {
            //   collection.insertOne(req.body);
            //   return 'User create in database'
            // } catch (e) { return e }
          }
          else return `Welcome ${req.body.name}`
        }).then(message => {
          res.send(message)
          res.end();
        })
    }
    else console.log(err)

  });
})

export default handler;





