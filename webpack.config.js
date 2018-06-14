var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={

    mode: 'production',

    entry : {
        app: __dirname + '/src/App.js'
    } ,

    output: {
        path: path.resolve(__dirname, './dist/build'),
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

            {
                test: /\.(png|jpg|gif)$/,


                //outputPath : copy temp and place here && update
                // places imgs into the html file : the final dir before img get bundled

                use: [
                    {
                        loader: 'file-loader',
                        options: {

                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
            ]
    },

    // Plugins
    plugins: [new HtmlWebpackPlugin({
        title: 'My Custom HTML Temp',
        template: './src/index.html'
    })
    ],


    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    }
};



