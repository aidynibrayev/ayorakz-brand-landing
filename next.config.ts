import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: no server, deploys as plain files on Vercel.
  output: "export",
  // Let a phone on the local network load dev JS (http://192.168.1.4:3000).
  allowedDevOrigins: ["192.168.1.4"],
  // /p/heater-2in1/ -> /p/heater-2in1/index.html, works on any static host.
  trailingSlash: true,
  images: {
    // The image optimizer needs a server, so images ship pre-sized as webp.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
