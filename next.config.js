const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    PATH:'',
    PATH_LOCALE: 'http://localhost:3000/',
    PATCH_DEPLOY:'https://next-travel.vercel.app/'
  },

}
