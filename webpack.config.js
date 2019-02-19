//打包配置文件
/*在webpack.config.js中定义了webpack-dev-server的名称为dev, npm run dev就可以了*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html-webpack-plugin插件


module.exports = {
  mode: 'development', //开发模式
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [    //插件
    new HtmlWebpackPlugin({   //new 一个这个插件的实例，并传入相关的参数
      template: __dirname + "/src/index.html",
      // filename:'index.html'
    })
  ],

  module: {   //所有第三方模块加载器
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']}, //配置处理 .css文件第三方加载器的规则
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},//loader从后向前调用,顺序不能颠倒
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},//
      {test: /\.(jpg|jpeg|png|bmp|gif)$/, use: 'url-loader?limit=6866&name=[hash:8]-[name].[ext]'},
      //limit的值大于图片的值，URL会转成base64;   hash 哈希值，[name] 原来图片的名字，[ext] 图片后缀名
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, //字体图标文件格式
      //设置babel的匹配规则
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, //exclude:/node_modules/,是指
      // node_modules文件夹下的js文件不用编译
      {test: /\.vue$/, use: 'vue-loader'},//处理.vue 的loader
    ]

  },

  resolve: {
    alias: { //修改vue被导入包的路径
      'vue$': 'vue/dist/vue.js'
    }
  }

};
