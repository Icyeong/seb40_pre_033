const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'https://bea9-14-55-61-123.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
