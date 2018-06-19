var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports={

    mode: 'production',

    entry : {
        app: __dirname + '/src/index.js',
        // style: __dirname + '/src/assets/css/main.scss',
    } ,

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },


    //used to map where errors occur in bundle
    devtool: "#source-map",



    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {

                        presets: ["react",'es2015']
                    }
                }
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            },

            // {
            //     test: /\.(css|scss)$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         "sass-loader"
            //     ]
            // },

            {
                test: /\.(css|scss)$/,
                use: [
                    {loader: 'style-loader'}, {loader:'css-loader'}, {loader: 'sass-loader'}]
            },



            {
                test: /\.(png|jpg|gif|svg|eot|woff|ttf|woff2)$/,


                //outputPath : copy temp and place here && update
                // places imgs into the html file : the final dir before img get bundled

                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
            ]
    },

    // Plugins
    plugins: [

        new HtmlWebpackPlugin({
        title: 'My Custom HTML Temp',
        template: './src/index.html'
        }),

        new ExtractTextPlugin("styles.css")


    ],

    devServer: {
        contentBase: path.join(__dirname, 'src'),

        publicPath: '/',
        compress: true,

        watchOptions:{
            poll: true
        },

        historyApiFallback: true,

        compress: true,
        port: 3000
    }
};



