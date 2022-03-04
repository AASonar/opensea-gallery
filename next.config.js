/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [],
  },
  env: {
    COVALENT_API_KEY: process.env.COVALENT_API_KEY,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
  nextConfig,
};
