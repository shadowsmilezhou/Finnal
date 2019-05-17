const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:['./app/js/viewport.js','./app/js/main.js'],    
    module:{
        rules:[
            {
                test: /\.html$/,
                use:['html-loader']
            },

            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localIdentName: '[local]_[hash:base64:8]'
                    }
                  }
                ]
              },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader'
                    }
                ]
            },
            {
                test:/\.sass/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
        
                }
              }
        ]
     },
    plugins:[ 
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './app/views/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [
          '.js', '.vue', '.json'
        ],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      },
    devServer: {
        contentBase: './dist',
        hot: true,
        compress: true,
        port: 9000,
        clientLogLevel: "none",
        quiet: true
    },
    output:{
        filename:'[name].min.js',
        path: path.resolve(__dirname, 'dist')
    }



}