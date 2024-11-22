/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cấu hình của bạn
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**' // Cho phép tất cả các đường dẫn
      }
    ]
  }
}
