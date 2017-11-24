const {resolve, join} = require('path');

// 相对于当前目录
const resolveOwn = path => {
  return resolve(__dirname, path);
};

// 相对于项目根目录
const resolveApp = path => {
  return resolve('.', path);
};

// 项目名
const project = resolveApp('').split('/').pop();
// 配置路径
const configPath = resolveApp('config');
// 服务路径
const serverPath = resolveApp('server');
// api路径
const apiPath = resolveApp('api/api.js');

// 模板文件
const templatePath = join(configPath, 'template.html');

// postcssPath
const postcssPath = join(configPath, 'postcss.config.js');

// webpackDevPath
const webpackDevPath = join(configPath, 'webpack.dev.config.js');
// webpackDestPath
const webpackDestPath = join(configPath, 'webpack.dest.config.js');
// devClient
const devClient = join(serverPath, 'dev.client.js');

// devServerPath
const devServerPath = join(serverPath, 'server.dev.js');
// destServerPath
const destServerPath = join(serverPath, 'server.dest.js');

// webpackDllCommonPath
const webpackDllCommonPath = join(configPath, 'webpack.dll.common.js');
// webpackDevDllPath
const webpackDevDllPath = join(configPath, 'webpack.dll.dev.js');
// webpackDestDllPath
const webpackDestDllPath = join(configPath, 'webpack.dll.dest.js');

// dllPath
const dllPath = 'js/dll';
// dllMap
const dllMap = 'dll.map.json';
// indexMap
const indexMap = 'index.map.json';


// tempPath
const tempPath = resolveApp('temp');
// fileTimePath
const fileTimePath = join(tempPath, 'filetime.json');

// k.config.js
const kConfigPath = join(configPath, 'k.config.js');
// 用户配置
const userKConfigPath = resolveApp('k.config.js');

module.exports = {
  resolveOwn,
  resolveApp,
  project,
  templatePath,
  postcssPath,
  webpackDevPath,
  webpackDestPath,
  webpackDevDllPath,
  webpackDestDllPath,
  webpackDllCommonPath,
  devServerPath,
  destServerPath,
  apiPath,
  indexMap,
  dllMap,
  dllPath,
  tempPath,
  fileTimePath,
  kConfigPath,
  userKConfigPath,
  devClient
};