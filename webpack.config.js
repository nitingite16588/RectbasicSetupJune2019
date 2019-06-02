
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {

  var DEV_MODE=env.development ?true:false

return {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
           {
             loader:MiniCssExtractPlugin.loader,
            
           },'css-loader',
           'postcss-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

  ],
  devServer:{
    historyApiFallback: true,
   // compress: true,
  },
  //devtool: DEV_MODE? "cheap-module-eval-source-map":"cheap-module-source-map",
  devtool: DEV_MODE? "cheap-module-eval-source-map":"source-map",
 // devtool: false,
  mode:DEV_MODE?"development":"production"
}
}