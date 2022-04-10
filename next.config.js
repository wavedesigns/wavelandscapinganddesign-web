const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['res.cloudinary.com', 'media.graphcms.com', 'media.graphassets.com'],
    deviceSizes: [639, 767, 1023, 1279, 1535],
    imageSizes: [320, 480, 640, 768, 924, 1180, 1436],
  },
  env: {
    NEXT_PUBLIC_FORM_SPREE_CONTACT_KEY: process.env.NEXT_PUBLIC_FORM_SPREE_CONTACT_KEY,
    NEXT_PUBLIC_FORM_SPREE_CAREERS_KEY: process.env.NEXT_PUBLIC_FORM_SPREE_CAREERS_KEY,
  },
})
