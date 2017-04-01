const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'build'),
        publicPath: '/',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }],
                        'react',
                    ],
                },
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                return [
                                    require('postcss-cssnext'),
                                ];
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
            },
        }),
        new CopyWebpackPlugin([
            { from: 'src/index.html' },
            { from: 'src/style.css' },
        ]),
    ],
};
