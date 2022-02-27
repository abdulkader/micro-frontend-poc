const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

module.exports = {
    mode: "development",
    port: config.container.port,
}