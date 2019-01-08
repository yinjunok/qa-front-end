const path = require('path');
const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript(withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config, options) {
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());
    
    config.module.rules.push(
      {
        test: /\.(jpe?g|png)$/,
        use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192
              }
            }
          ]
        },{
          test: /\.css$/,
          loader: 'css-loader',
          include: path.resolve(__dirname, './node_modules/braft-editor/dist/index.css'), 
        }
      );
    return config
  },
}));

