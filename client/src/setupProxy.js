const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'https://d92f-114-205-132-181.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
