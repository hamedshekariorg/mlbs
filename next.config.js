const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

// add bundle analyzer config
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}; // eslint-disable-line
}

const nextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    // for import .png, .svg,... image
    disableStaticImages: true,
    // next-images not working in ssg mode
    domains: ['api.mlbs.stg.blytd.com', 'oss.blytd.com'],
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    emotion: true,
  },
  webpack5: true,
  webpack: (config, { isServer }) => {
    // Do whatever you want in build-time
    // ask Webpack to replace @sentry/node imports with @sentry/browser when building the browser's bundle.
    if (!isServer) {
      // eslint-disable-next-line
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },
};

module.exports = withPlugins([[withImages], [withBundleAnalyzer]], nextConfig);
