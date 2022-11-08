const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/auth', '/user', '/articles', '/article', '/comment'],
    createProxyMiddleware({
      target: 'https://stackoverflow-cloning.herokuapp.com',
      changeOrigin: true,
    })
  );
};
