const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname , '/dist'),
        filename: 'index.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '$images': path.resolve(__dirname, 'src/assets/images'),
        },
        extensions: [".tsx", ".json", ".js", ".jsx", ".ts"],
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname , 'public'),
        },
        compress: true,
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "swc-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },  
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: path.join(__dirname , 'public/index.html')
        }),
    ]
}