import type { NextConfig } from "next";

/**
 * Next.js Configuration
 *
 * SECURITY AUDIT & SAFEGUARDS:
 * 1. Legacy properties `publicRuntimeConfig` and `serverRuntimeConfig` have been omitted/removed entirely.
 *    This ensures that no sensitive server-side environment variables or secrets can accidentally leak
 *    into the client-side bundle via these legacy mechanisms.
 * 2. Only public, safe environment variables prefixed with `NEXT_PUBLIC_` are permitted for consumption
 *    by the client-side/browser bundle.
 * 3. Rewrites are used in local development to proxy API requests to the backend server seamlessly without
 *    exposing backend credentials or setting up complex CORS options.
 */
const nextConfig: NextConfig = {
  async rewrites() {
    // Determine the API URL fallback for local development.
    // Ensure we use a public/safe variable fallback for safety, defaulting to localhost:8080.
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

    return [
      {
        source: "/api/v1/:path*",
        destination: `${backendUrl}/api/v1/:path*`,
      },
      {
        source: "/backend/:path*",
        destination: `${backendUrl}/backend/:path*`,
      },
    ];
  },
};

export default nextConfig;
