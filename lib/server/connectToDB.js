const MongoClient = require("mongodb").MongoClient;
import config from '../../config.json'
import setHash from '../../lib/server/setHash'

export default async function connectToDB(collect, user, callBack) {

  const mongoClient = new MongoClient(config.db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  mongoClient.connect((err, client) => {
    if (!err) {

      const db = client.db(config.collection);
      const collection = db.collection(collect);
      const objUser=JSON.parse(user)
      
      collection.find({login:objUser.login, password:objUser.password}).toArray()
        .then(data=>{
          let hash = ''
      
          if(data.length>0){
            const _id=data[0]._id;
            hash = setHash()
            

            /// Вилосипед с добавлением юзеру хеша
            collection.updateOne({ _id: _id }, { $set: { hash: hash } }, (err, result) => {
              // console.log(result);
              if (err) {
                console.log('Unable update user: ', err)
                throw err
              }
            })

          }
          callBack(hash)
          client.close();
        })
    }
    else console.log(err)
  })
} 