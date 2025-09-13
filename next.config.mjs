/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
  reactStrictMode: true,
  images: {
    domains: ['harborgroupusa.s3-eu-central-2.ionoscloud.com'],
  },
};

export default nextConfig;
