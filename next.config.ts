import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    // Omogućava `@use "abstracts" as *;` u svakom .scss fajlu, bez relativnih putanja
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
