/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['harborgroupusa.s3-eu-central-2.ionoscloud.com'],
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb', // allow up to 10MB request body
    },
  },
};

export default nextConfig;
