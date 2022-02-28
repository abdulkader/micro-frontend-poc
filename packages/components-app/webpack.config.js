const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");
const config = require(path.resolve(__dirname, "../configs"));

const isProd = config.mode === "production";

module.exports = {
  mode: config.mode,
  output: {
    filename: isProd ? "[name].[contenthash].js" : "bundle.js",
    publicPath: config.components.publicPath,
  },
  devServer: {
    port: config.components.port,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "uiComponents",
      filename: "remoteEntry.js",
      exposes: {
        "./AppErrorBoundary": "./src/AppErrorBoundary",
        "./Header": "./src/Header",
        "./Footer": "./src/Footer",
      },
      shared: {
        ...packageJson.dependencies,
        react: packageJson.dependencies.react,
        "react-dom": packageJson.dependencies["react-dom"],
        "eact-router-dom": packageJson.dependencies["react-router-dom"],
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
