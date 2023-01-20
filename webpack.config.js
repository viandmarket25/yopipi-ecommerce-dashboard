import Webpack from 'webpack';
module.exports = {
    plugins: [
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        new Webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new Webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
}