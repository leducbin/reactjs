module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'react-component-example.js',
        library: 'reactComponentExample',
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    externals: {
        "react": "React",
        "cloudinary-core": "cloudinary"
    }
};