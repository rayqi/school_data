var { resolve } = require('path')

module.exports = {
    entry: './client', //where is initial loading/app logic
    output: {
        filename: 'bundle.js',
        path: __dirname //path for the result bundle. node creates a path to make cross platform and easy to use
    },
    mode: 'development',
    context: __dirname,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /.jsx?$/, //to process only JSXX files
                loader: 'babel-loader', //to use Babel Loader
                exclude: '/node-modules/', //we don't want Babel to process any files under that
                include: resolve(__dirname, './app'),
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                } //which rules do we want it to apply, in our case, only to cover to react code
            }
        ]
    }
}