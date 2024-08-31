import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtraPlugin from "mini-css-extract-plugin";
export default {
    mode: 'production',
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: 'bundle.js',
        publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template:"src/index.html",
      }),
     new MiniCssExtraPlugin({
        filename:"style.css"
      })
    ], 
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
            { test: /\.css$/, use: [MiniCssExtraPlugin.loader, "css-loader"] },
        ],
    },
};
