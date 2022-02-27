const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://boss-test.fengyouhui.net/be',
      changeOrigin: true,
    })
  );
};