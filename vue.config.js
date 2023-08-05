const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  lintOnSave:false,
  configureWebpack: (config) => {
    const cesiumSourcePath = 'node_modules/mars3d-cesium/Build/Cesium/' // cesium库安装目录
    const cesiumRunPath = './mars3d-cesium/' // cesium运行时路径
    
    const plugins = [
      // 标识cesium资源所在的主目录，cesium内部资源加载、多线程等处理时需要用到
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(path.join(config.output.publicPath, cesiumRunPath))
      }),
      // Cesium相关资源目录需要拷贝到系统目录下面（部分CopyWebpackPlugin版本的语法可能没有patterns）
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumSourcePath, 'Workers'), to: path.join( cesiumRunPath, 'Workers') },
          { from: path.join(cesiumSourcePath, 'Assets'), to: path.join( cesiumRunPath, 'Assets') },
          { from: path.join(cesiumSourcePath, 'ThirdParty'), to: path.join(cesiumRunPath, 'ThirdParty') },
          { from: path.join(cesiumSourcePath, 'Widgets'), to: path.join( cesiumRunPath, 'Widgets') }
        ]
      })
    ]
    return {
      module: { unknownContextCritical: false }, // 配置加载的模块类型，cesium时必须配置
      plugins: plugins,
   
      resolve:{
        fallback:{
          path:false,
          zlib:false,
          url:false,
          https:false,
          http:false,

        }
      }
    }
  }
}