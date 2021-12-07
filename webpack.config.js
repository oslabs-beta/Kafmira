const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// // Create index.html file that has <script> with src ='/build/bundle.js' injected into it!!!
// const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: "./index.html",
// });

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  //mode changed to dev for electron
  mode: "development",

  devtool: "inline-source-map",

  //Needed for webpack/electron build
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
            
            //@babel/plugin-transform-runtime --> limits unnecessary code duplication as a result of babel's helper transpile functions
            //must instal @babel/runtime & @babel/plugin-transform-runtime
            plugins: ["@babel/plugin-transform-runtime"]
          },
        },
      },
      {
        // css-loader interprets @import and url() like import/require() and will resolve them.
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
//   plugins: [htmlWebpackPluginConfig],
//   devServer: {
//     static: {
//       publicPath: "/build/",
//     },
//     port: 8080,
//     proxy: {
//       "/api": "http://localhost:3000"
//     },
//     historyApiFallback: true,
//   },
// };
