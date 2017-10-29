const HWP = require('html-webpack-plugin');
module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    devServer: {
        inline: true,
        port: 3000
    },
    plugins: [
        new HWP({
            template: `${__dirname}/src/index.html`,
            filename: 'index.html'
        })
    ]
}