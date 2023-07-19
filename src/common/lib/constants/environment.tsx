export const ENV = process.env.NODE_ENV;

export const IS_PRODUCTION = ENV === 'production';
export const IS_DEVELOPMENT = ENV === 'development';

// Environment variables
export const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';

export const GOOGLE_AUTH_EMAIL = process.env.GOOGLE_AUTH_EMAIL ?? '';
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? '';
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? '';
export const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN ?? '';
export const GOOGLE_ACCESS_TOKEN = process.env.GOOGLE_ACCESS_TOKEN ?? '';
