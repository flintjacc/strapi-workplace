module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  url: '/admin',
  serveAdminPanel: true,
  allowedHosts: [
    'strapi-workplace-production.up.railway.app',
    'localhost',
    '127.0.0.1'
  ]
});
