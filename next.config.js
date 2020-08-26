const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/unloading',
  //       destination: '/unloading/index',
  //       permanent: true,
  //     },
  //   ]
  // },
}
