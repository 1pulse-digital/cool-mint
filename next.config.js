const withMDX = require('@next/mdx')({
  extension: /\.md$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
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
