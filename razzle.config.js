const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  plugins: ['typescript'],
  modify: (config, { target, dev }, webpack) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config;
  },
};