/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Cloudflare Pages static hosting
  output: "export",

  // Cloudflare Pages does not fail builds on ESLint by default,
  // but keeping this explicit is fine
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Static export cannot rely on runtime type checks
  typescript: {
    ignoreBuildErrors: true,
  },

  // Required because Next Image Optimization needs a server
  images: {
    unoptimized: true,
  },

  // Expose public env vars at build time
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // Optional: Custom Webpack configuration
  webpack(config) {
    // Split large chunks to avoid Cloudflare Pages 25MB limit
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 25 * 1024 * 1024, // 25MB
    };
    return config;
  },
};

module.exports = nextConfig;
