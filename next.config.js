const withOffline = require('next-offline');
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')


const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  },
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: '/',
        handler: 'networkFirst',
        options: {
          cacheName: 'html-cache',
        },
      },
      {
        urlPattern: new RegExp(`${process.env.API_URL}/products`),
        handler: 'networkFirst',
        options: {
          cacheName: 'html-cache',
        },
      },
      {
        urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'image-cache',
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ]
  },
};

module.exports = withOffline(nextConfig);