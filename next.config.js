/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true, // 为了静态导出，禁用图片优化
  },
  // 禁用不必要的功能
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 