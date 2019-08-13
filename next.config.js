const withOffline = require('next-offline');
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')


const nextConfig = {
  // Rollback doteEnv because Now dosent support yet, request made with absoluteUrl 
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
        //Caching the profile user
        urlPattern: new RegExp('https://coding-challenge-api.aerolab.co/user/me'),
        handler: 'NetworkFirst',
        options:{
          cacheName: 'html-cache'
        }

      },
      {
        urlPattern: '/',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html-cache',
        },
      },
      //caching the products
      {
        urlPattern: new RegExp(`https://coding-challenge-api.aerolab.co/products`),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html-cache',
        },
      },
      {
        //caching images
        urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
        handler: 'CacheFirst',
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