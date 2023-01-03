/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          subsets: ["latin"],
          weight: ["400", "500", "600", "700", "800"],
          display: "swap",
        },
      },
    ],
  },
};

module.exports = nextConfig;
