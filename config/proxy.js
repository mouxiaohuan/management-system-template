const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  const REACT_APP_ENV = process.env.REACT_APP_ENV;
  const target = `https://api-cloud-${REACT_APP_ENV || 'dev'}.xjsdtech.com`;
  app.use(
    '/api/web/',
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        '^/api/web/': '',
      },
    }),
  );
};
