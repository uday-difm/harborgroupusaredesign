/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'harborgroupusa.s3-eu-central-2.ionoscloud.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
