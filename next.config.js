const withMDX = require('@next/mdx')({
  extension: /\.mdx/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md','mdx', 'ts', 'tsx'],
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/made-in-workshop/**",
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
