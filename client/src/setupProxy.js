const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/auth', '/user', '/articles', '/article', '/comment'],
    createProxyMiddleware({
      target: 'https://s3ackoverflow.herokuapp.com',
      changeOrigin: true,
    })
  );
};
