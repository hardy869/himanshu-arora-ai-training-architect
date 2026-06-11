import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — generates a fully static site under `out/`,
  // deployable to any CDN or static host (matches the existing deploy model).
  output: "export",
  // next/image's default loader needs a server; disable optimization for static export.
  images: { unoptimized: true },
  // Emit trailing-slash directories so static hosts resolve routes cleanly.
  trailingSlash: true,
};

export default nextConfig;
