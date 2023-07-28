// 环境变量
const REACT_APP_ENV = process.env.REACT_APP_ENV;

// 应用名称
const appName = 'tempReact';
// 输出目录
const output = 'dist';

module.exports = {
  appName,
  output,
  //开启端口是多少
  port:8080,
  // 静态资源引用路径
  publicPath: `https://frontend-cdn-${REACT_APP_ENV}.xjsdtech.com/${appName}/`,

  // 打包是否开启sourceMap
  shouldUseSourceMap: true,

  /* 以下选项开启 请务必保证前端独立发布，用户访问到的是每次前端打包的html，而非托管于后端的html */

  // 是否将模块引用关系runtime打入html
  shouldInlineRuntimeChunk: false,
};
