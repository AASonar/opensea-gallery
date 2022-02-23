/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["logos.covalenthq.com", "www.covalenthq.com"],
  },
  env: {
    COVALENT_API_KEY: process.env.COVALENT_API_KEY,
  },
  nextConfig,
};
