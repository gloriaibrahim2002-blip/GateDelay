This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Local API Proxy & Rewrites

To streamline local development and avoid CORS or origin issues, this project is configured with an integrated API rewrite proxy in `next.config.ts`.

### How It Works

During local development, API requests originating from the client-side are proxied as follows:
- Requests starting with `/api/v1/*` are transparently forwarded to the backend server.
- Requests starting with `/backend/*` are transparently forwarded to the backend server.

### Configuration

You can configure the target backend server by setting the `NEXT_PUBLIC_API_URL` environment variable in your `.env.local` file.

- **Fallback Default**: If `NEXT_PUBLIC_API_URL` is not defined, the proxy defaults to forwarding requests to `http://localhost:8080`.
- **Example configuration** in `.env.local`:
  ```env
  NEXT_PUBLIC_API_URL=http://localhost:8080
  ```

### Security & Secret Leakage Prevention

- **No Server Secrets in Client Bundle**: Legacy configurations like `publicRuntimeConfig` and `serverRuntimeConfig` have been deprecated and completely removed.
- **Explicit Variable Exposure**: Only environment variables prefixed with `NEXT_PUBLIC_` are loaded into the browser-facing bundle. All other variables remain strictly server-side, preventing accidental leaks of API credentials or secrets.
