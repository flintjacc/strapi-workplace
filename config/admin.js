module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  url: "/admin",
  serveAdminPanel: true,
  webpack: (config, webpack) => {
    config.devServer = {
      ...config.devServer,
      allowedHosts: "all"
    };
    return config;
  }
});
