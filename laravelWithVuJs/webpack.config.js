let webpack = require('webpack');
let path = require('path');


module.exports = {
    entry: "./resources/assets/js/app.js",

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js',
        publicPath: './public'

    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],

    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
};

if(process.env.NODE_ENV==="production"){
    console.log('whats up dock');
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            compress: {
                warning: false
            }
        })
    )

    module.exports.plugins.push(
        new webpack.DefinePlugin({
           'process.env':{
               NODE_ENV:'production'
           }
        })
    )
}

