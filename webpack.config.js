const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  mode: "development",

  devtool: "inline-source-map",
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"]
          },
        },
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  }
};
