'use strict';

import 'dotenv/config';
import joi from '@hapi/joi';


// Required environment variables
const requiredEnvVariables = ['SERVER_ENV', 'SERVER_PORT'];

requiredEnvVariables.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`[-] Environment variable ${name} is missing`)
  }
});


const envVariablesSchema = joi.object({
  SERVER_ENV: joi.string().valid(['local', 'dev', 'qa', 'prod']).required(),
  SERVER_PORT: joi.number().required(),
  LOG_LEVEL: joi.string().allow(['error', 'warn', 'info', 'verbose', 'debug']).default('info')
}).unknown().required();


const { error, value: envVariables } = joi.validate(process.env, envVariablesSchema);

if (error) {
  throw new Error(`[-] Config validation error: ${error.message}`);
}

const config = {
  env: envVariables.SERVER_ENV,
  logger: {
    level: envVariables.LOG_LEVEL
  },
  server: {
    port: Number(envVariables.SERVER_PORT)
  }
};

export default config;