const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    proxy('/.netlify/functions/', {
      target: 'http://localhost:9000/',
      pathRewrite: {
        '^/\\.netlify/functions': '',
      },
    }),
  );
};
