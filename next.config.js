const withOffline = require('next-offline');

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

        // Apply a cache-first strategy.
        handler: 'CacheFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'images',
          expiration: {
            maxAgeSeconds: 60 * 24 * 60 * 60,
          }
        },
      },
      {
        urlPattern: /^https?:\/\/coding-challenge-api.aerolab.com\/products\//,
        handler: 'NetworkFirst'
      },
      {
        urlPattern: /^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
        cacheName: 'CacheFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'google-fonts',
          maxAgeSeconds: 60 * 24 * 60 * 60,
        }
      }
    ]
  },
};

module.exports = withOffline(nextConfig);