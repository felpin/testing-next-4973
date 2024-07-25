import nextTranspileModules from 'next-transpile-modules'

const withTM = nextTranspileModules([
  "@mui/material",
  "@mui/system",
  "@mui/icons-material",
]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    return config;
  },
});

export default nextConfig;
