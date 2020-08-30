import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient("mongodb+srv://max:German2002@karamax.idcis.mongodb.net", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('travel');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;