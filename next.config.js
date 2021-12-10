const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['res.cloudinary.com', 'media.graphcms.com'],
    minimumCacheTTL: 60 * 60 * 5,
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  env: {
    NEXT_PUBLIC_FORM_SPREE_CONTACT_KEY: process.env.NEXT_PUBLIC_FORM_SPREE_CONTACT_KEY,
    NEXT_PUBLIC_FORM_SPREE_CAREERS_KEY: process.env.NEXT_PUBLIC_FORM_SPREE_CAREERS_KEY,
  },
})
