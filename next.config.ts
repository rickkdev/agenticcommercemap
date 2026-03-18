import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "raw.githubusercontent.com" },
      { hostname: "unavatar.io" },
    ],
  },
};

export default nextConfig;
