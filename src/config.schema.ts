import * as joi from '@hapi/joi';

export const configValidationSchema = joi.object({
  STAGE: joi.string().required(),
  DB_HOST: joi.string().required(),
  DB_USERNAME: joi.string().required(),
  DB_PORT: joi.number().default(5432),
  DB_PASSWORD: joi.string(),
  DB_DATABASE: joi.string(),
});
