const HWP = require('html-webpack-plugin')
const webpack = require('webpack')
const poststylus = require('poststylus')
const cssnext = require('postcss-cssnext')
const autoprefixer = require('autoprefixer')

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
                test: /\.css$/,
                loader: 'style-loader!css-loader'
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
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    use: [ poststylus([ cssnext({autoprefixer: {browsers: "ie >= 10, ..."}}) ]) ]
                }
            }
        }),
        new HWP({
            template: `${__dirname}/src/index.html`,
            filename: 'index.html'
        })
    ]    
}