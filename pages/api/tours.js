import nextConnect from 'next-connect';
import middleware from '../../database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('tours').find({}).toArray();
    res.json(doc);
});

export default handler;