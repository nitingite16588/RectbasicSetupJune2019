
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {
  var DEV_MODE = env.development ? true : false

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
          test: /\.(s*|sass)css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader', "sass-loader",
          ]
        },

        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         
          use: [
              {
                  loader: 'url-loader',
                  options: {
                      limit: 1000,
                      mimetype: 'application/font-woff'
                  }
              }

          ]
      },
      {
        test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
           
            use: [{
                loader: 'file-loader'
            }]
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
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),

    ],
    devServer: {
      historyApiFallback: true,
      // compress: true,
    },

    devtool: DEV_MODE ? "source-map" : "source-map",
    mode: DEV_MODE ? "development" : "production"
  }
}