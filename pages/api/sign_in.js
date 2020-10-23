import nextConnect from 'next-connect';
import connectToDB from '../../lib/server/connectToDB';






const connect = nextConnect();


connect.post((req, res) => {
  // const user = JSON.parse(req.body);
  connectToDB('users', req.body, (hash) => {
    res.send(hash)
    res.end();
  },
  )

})






export default connect;