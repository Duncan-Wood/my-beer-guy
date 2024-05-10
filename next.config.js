/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
          // need to add this to config to use optimized Next images
          // should be worth it considering all logos come from Google Cloud Storage
          // this is for our GCP bucket
          {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
          },
        ],
      },
}
