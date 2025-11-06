module.exports = ({ env }) => ({
  auth: { secret: env('ADMIN_JWT_SECRET') },
  apiToken: { salt: env('API_TOKEN_SALT') },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
  url: '/admin',
  serveAdminPanel: true,
  // COMPLETELY DISABLE VITE SECURITY
  webpack: (config, webpack) => {
    config.devServer = {
      ...config.devServer,
      allowedHosts: 'all',
      host: '0.0.0.0',
      port: 1337,
    };
    return config;
  },
  // Force disable all security
  config: {
    admin: {
      webpack: (config) => {
        config.devServer = {
          ...config.devServer,
          allowedHosts: 'all',
        };
        return config;
      },
    },
  },
});