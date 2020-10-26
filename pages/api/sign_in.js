import nextConnect from 'next-connect';
import connectToDB from '../../lib/server/connectToDB';






const connect = nextConnect();

connect.post((req, res) => {
  connectToDB('users', req.body, (hash) => {
    res.send(hash)
    res.end();
  },
  )

})






export default connect;