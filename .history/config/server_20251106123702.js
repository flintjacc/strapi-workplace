module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337), // Let Railway set the port
  app: {
    keys: env.array('APP_KEYS'),
  },
});