import dotenv from 'dotenv';

dotenv.config();

export const env = {
  BASE_URL: process.env.BASE_URL || 'https://reqres.in',
  API_KEY: process.env.API_KEY || '',
};