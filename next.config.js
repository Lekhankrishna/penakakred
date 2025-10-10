/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ✅ static export folder
  trailingSlash: true,     // ✅ ensures all pages work (like /faq/)
  images: {
    unoptimized: true,     // ✅ allows local images to export properly
  },
};
module.exports = nextConfig;
