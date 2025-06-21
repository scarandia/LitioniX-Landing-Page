/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, //  Desactivar la optimización de imágenes para Netlify
  },
};

module.exports = nextConfig
