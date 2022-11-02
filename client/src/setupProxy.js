const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/auth', '/user', '/article', '/articles', '/comment'],
    createProxyMiddleware({
      target: 'https://4c40-114-205-132-181.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
