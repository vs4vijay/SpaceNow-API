'use strict';

// Required environment variables
[
  'SERVER_ENV',
  'SERVER_PORT'
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`[-] Environment variable ${name} is missing`)
  }
});

const config = {
  env: process.env.SERVER_ENV,
  logger: {
    level: process.env.LOG_LEVEL || 'info'
  },
  server: {
    port: Number(process.env.SERVER_PORT)
  }
}

export default config;