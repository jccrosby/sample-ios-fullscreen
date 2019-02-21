const path = require('path');
const WpHtmlPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'development';

const DEV_PORT = process.env.DEV_PORT || 8080;

const paths = {
    BASE: path.resolve(__dirname, './'),
    SRC: path.resolve(__dirname, 'src'),
    DIST: path.resolve(__dirname, 'dist'),
    CONTENT_BASE: path.resolve(__dirname, 'test-harness'),
    NODE_MODULES: 'node_modules',
};

const htmlPluginConf = {
    filename: 'index.html',
    title: 'Video player test',
    template: 'src/index.html',
    inject: true,
};

// Webpack dev server options
const devServer = {
    contentBase: [paths.BASE],
    compress: true,
    https: false,
    hot: false,
    port: DEV_PORT,
    open: false,
    host: '0.0.0.0',
    allowedHosts: [
        'localhost',
        '.mlb.com',
        'local.mlb.com',
        'qa-aws.mlb.com',
        'beta-aws.mlb.com',
        'www.mlb.com',
    ],
};

const externals = [];

module.exports = {
    mode: 'development',
    entry: path.join(paths.SRC, 'js/entry.js'),
    devtool: 'source-map',
    devServer,
    plugins: [new WpHtmlPlugin(htmlPluginConf)],
    externals,
    output: {
        path: paths.DIST,
        filename: 'fullscreen-test.js',
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        modules: [
            paths.SRC,
            paths.NODE_MODULES,
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /node_modules\/mlb-player-plugins/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader'),
                },
            },
            {
                test: /\.(c|le)ss$/,
                // less-loader compiles Less to CSS
                // then css-loader translates CSS into CommonJS
                // then style-loader creates style nodes from JS strings
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: false, // true outputs JSX tags
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            },
        ],
    },
};
