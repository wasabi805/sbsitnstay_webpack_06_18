const webpack = require('webpack');
const path = require('path');
const $ = require("jquery");


const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports={

    // mode: 'production',
    mode: 'development',

    entry : {
        app: __dirname + '/src/index.js',
    } ,

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },

    //used to map where errors occur in bundle
    devtool: false,

    module: {
        rules: [
            {
                test: /\.(js)?$/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,

                use:[{

                    loader: 'babel-loader',
                    options: {
                        presets:[
                            'react','es2015',
                        ]

                    }

                }]
            },

            //SET UP FOR PROCESSING SASS w/sass-loader-> see App.js, need to import scss style sheet
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            },


            //SET UP FOR css styled components -> see App.js, need to import css style sheet
            {
                test: /\.(css)$/,
                use:[
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',

                ],
            },

            {
                test: /\.html$/,
                use: ['html-loader']
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
                            publicPath: 'src/images'
                        }
                    }
                ]
            }
            ]
    },

    // Plugins
    plugins: [

        new webpack.EvalSourceMapDevToolPlugin(),

        new HtmlWebpackPlugin({
        title: 'My Custom HTML Temp',
        template: './src/index.html'
        }),


        // Used for Bootstrap JavaScript components
        // Used for Bootstrap JavaScript components
        // Used for Bootstrap dropdown, popup and tooltip JavaScript components
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ['popper.js', 'default']
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 3000,

        publicPath: '/',
        watchOptions:{
            poll: true
        },

        //TODO step 7
        proxy:[{
            context: ['/api'],
            target: 'http://localhost:5000',
        }],
        ////////////////////

        //without this prop in devServer, your pages won't reload if you click refresh
        historyApiFallback: true,

    }
};



