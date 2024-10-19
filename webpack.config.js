const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "index.pack.js",
    path: path.resolve(__dirname, "dist"), // Output bundle in the dist folder
    clean: true,
  },
  entry: {
    entry: "./src/index.ts",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
        test: /\.ts$/,
      },

      {
        test: /\.css$/, // Matches any .css files
        use: ["style-loader", "css-loader"], // Uses style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Matches image file types
        type: "asset/resource", // Automatically chooses between file-loader and url-loader based on the size of the image
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: "./dist", // Folder to serve
    historyApiFallback: true, // To handle React Router routes
    open: true, // Opens the browser automatically
  },
};
