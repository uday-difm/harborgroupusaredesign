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
      {
        protocol: 'https',
        hostname: 'cloudinary.hbs.edu',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
