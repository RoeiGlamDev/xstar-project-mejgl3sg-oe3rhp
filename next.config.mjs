import { defineConfig } from 'next'
export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: ['yourimagehosts.com'], // Replace with your image hosting domains
    formats: ['image/avif', 'image/webp']
},
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 10000,
      maxSize: 250000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true
}
    return config
  },
  experimental: {
    images: {
      layoutRaw: true
}
}
});