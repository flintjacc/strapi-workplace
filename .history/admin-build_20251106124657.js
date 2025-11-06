// admin-build.js - Force build with allowed hosts
const { execSync } = require('child_process');

console.log('🚀 Building admin with forced allowed hosts...');

// This will build admin with your domain allowed
execSync('npm run build', { 
  stdio: 'inherit',
  env: {
    ...process.env,
    HOST: '0.0.0.0',
    PORT: '1337',
    NODE_ENV: 'production'
  }
});

console.log('✅ Admin built successfully!');