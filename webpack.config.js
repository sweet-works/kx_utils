/*
 * @Autor: yaojie
 * @Date: 2021-08-25 14:25:38
 * @LastEditors: yaojie
 * @LastEditTime: 2021-08-25 15:46:27
 * @Description: 
 */
const path = require('path')

module.exports = {
    // 模式
    // mode: 'development', // 开发模式 生成普通 js 文件
    mode: 'production', // 生产模式 生成 .min.js 压缩文件
    // 入口
    entry: './index.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'kx_utils.js', // 生成的文件名 对应 开发模式
        // filename: 'wk_utils.min.js', // 生成的文件名 对应 生产模式
        library: 'kx_utils', // 向外暴露的对象的名称
        libraryTarget: 'umd' // 支持 ems / commontjs / requirejs 规范
        // libraryTarget: 'amd' // 支持 requirejs 规范
    }
}