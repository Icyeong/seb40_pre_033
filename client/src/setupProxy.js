const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/auth', '/articles', '/article', '/comment'],
    createProxyMiddleware({
      target: 'https://a69a-114-205-132-181.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
