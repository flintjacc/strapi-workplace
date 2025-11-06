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
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Force allow all hosts for Vite
  webpack: (config, webpack) => {
    config.devServer = {
      ...config.devServer,
      allowedHosts: 'all'
    };
    return config;
  }
});