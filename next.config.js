const removeImports = require("next-remove-imports");

const nextConfig = removeImports({
  hmr: false,
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
        hmr: false, // disable HMR for url-loader
      },
    });

    return config;
  },
});

module.exports = nextConfig;
