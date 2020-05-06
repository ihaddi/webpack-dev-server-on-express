const path = require('path')


const appRoot = path.resolve(__dirname, '../../')

module.exports = {
    appRoot: appRoot,
    appBuildPath: path.resolve(__dirname, appRoot + '/build'),
    appIndexReact: path.resolve(__dirname, appRoot + '/src/index.js'),
    appHtmlTemplate: path.resolve(__dirname, appRoot + '/public/index.html'),
}