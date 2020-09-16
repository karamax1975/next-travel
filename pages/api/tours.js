import nextConnect from 'next-connect';
import middleware from '../../database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let tours = await req.db.collection('tours').find({}).toArray();
    const sort =tours.sort((a,b)=>a.id-b.id);
    res.json(sort);
});

export default handler;