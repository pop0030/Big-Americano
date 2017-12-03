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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    resolve: {
        modules: [`${__dirname}/src/`,`${__dirname}/src/component`,'node_modules'],
        extensions: ['.js','.jsx','.css','.styl']
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