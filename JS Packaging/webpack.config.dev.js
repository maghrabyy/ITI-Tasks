import path from "path";

export default {
    mode: 'development',
    devtool: "eval-source-map",
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js', 
        publicPath: "/",
    },
    plugins: [],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all', 
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};
