const path = require('path')

module.exports = {
    context: path.join(__dirname, './src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development'
}