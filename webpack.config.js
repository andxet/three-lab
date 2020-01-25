module.exports = {
    mode: 'development',
    devServer: {
        contentBase: require('path').join(__dirname, 'dist'),
        compress: true,
        port: 9000
        }
    };