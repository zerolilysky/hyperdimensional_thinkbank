// server/config/server.ts

import dotenv from 'dotenv';
dotenv.config();

export const ENV = process.env.ENV || 'development';

export const SERVER_HOST = process.env.SERVER_HOST || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT || '3000';

export const MONGODB_URI = process.env.MONGODB_URI || '';
export const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
