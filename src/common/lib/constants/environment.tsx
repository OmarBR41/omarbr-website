export const ENV = process.env.NODE_ENV;

export const IS_PRODUCTION = ENV === 'production';
export const IS_DEVELOPMENT = ENV === 'development';

export const DEBUG_MODE = Boolean(process.env.DEBUG_MODE) || IS_DEVELOPMENT || false;

// Environment variables
export const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';

// Gmail IAM settings
export const GOOGLE_AUTH_EMAIL = process.env.GOOGLE_AUTH_EMAIL ?? '';
export const GOOGLE_AUTH_PASS = process.env.GOOGLE_AUTH_PASS ?? '';
