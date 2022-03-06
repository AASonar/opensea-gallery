/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [],
  },
  env: {
    COVALENT_API_KEY: process.env.COVALENT_API_KEY,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
  nextConfig,
};
