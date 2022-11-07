const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/auth', '/user', '/articles', '/article', '/comment'],
    createProxyMiddleware({
      target: 'https://fe54-14-55-61-123.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
