const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 4002,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.json$/, type: 'json' },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_data",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./appData": "./src/App",
        "./OriginMD": "./src/markdown/Origin.md",
        './OriginObject': "./src/articles/origin"
      },
      shared: {
        ...deps,
      },
    })
  ],
};
