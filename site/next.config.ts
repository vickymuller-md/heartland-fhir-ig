import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/ig", destination: "/ig/index.html", permanent: false }];
  },
};

export default nextConfig;
