const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: 'main.css', //add this to get sass working correctly
});


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
    devtool: "#source-map",

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

            {
                test: /\.(scss|css)$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [{loader: "css-loader"}, {loader: "sass-loader"}]
                }),

                include: path.join(__dirname, 'src')
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

        // new ExtractTextPlugin("styles.css")

        // Used for Bootstrap JavaScript components
        // Used for Bootstrap JavaScript components
        // Used for Bootstrap dropdown, popup and tooltip JavaScript components
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ['popper.js', 'default']
        }),

        extractSass


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



