/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
        process: false,
        buffer: false,
        util: false,
        events: false,
      }

      config.plugins.push(
        new config.webpack.DefinePlugin({
          'process.emitWarning': 'function() {}',
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        })
      )
    }
    
    config.externals.push('pino-pretty', 'lokijs', 'encoding', 'bufferutil', 'utf-8-validate')
    
    return config
  },
}

export default nextConfig
