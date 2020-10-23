import crypto from 'crypto';

export default function criptoData() {
  let current_date = (new Date()).valueOf().toString();
  let random = Math.random().toString();
  return crypto.createHash('sha1').update(current_date + random).digest('hex');

}