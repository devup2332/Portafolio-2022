/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");

dotenv.config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST,
  },
};

module.exports = nextConfig;
