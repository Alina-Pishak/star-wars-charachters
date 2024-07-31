/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "starwars-visualguide.com",
        port: "",
        pathname: "/assets/img/**",
      },
    ],
  },
};

export default nextConfig;
