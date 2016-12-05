var config = {
    context: __dirname + "/app",
    entry: "./main.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/static",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ],
    }
};
module.exports = config;