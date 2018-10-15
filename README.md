# 共享单车管理系统

(一): 插件支持
1. react-router: npm install react-router-dom
2. axios: npm install axios
3. less-loader: npm install less-loader
4. less: npm install less
安装这三个一起安装，中间空格分开
npm install react-router-dom axios less-loader less
安装成功后package.json里面就有这四个了

配置less的时候，需要把webpack暴露出来
（1）暴露webpack: yarn eject / npm run eject(先代码提交，否则会报错)
   暴露成功后会发现多了两个文件夹 config 和 scripts ,package.json也多了好多东西
   配置less方法: https://blog.csdn.net/echo008/article/details/78311831
   配置之后要重新启动一下！！npm start
   prod和dev都要改，prod是上线之后用，不改上线会报错！！

5. antd: npm install antd / yarn add antd
6. babel: yarn add babel-plugin-import (实现按需加载)
antd和babel在webpack中的配置参考文章：
https://www.cnblogs.com/fm060/p/7736383.html
然后npm start重启一下～

(二): calc计算方法的使用
  1. 建立style文件夹，建立common.less
     在里面定义全局变量
     eg:@color: red;
  2. calc用法：
     http://www.css88.com/book/css/values/functional/calc().html

(三): 各个组件功能以及重点部分实现：
Footer:脚部组件,系统开发者的个人信息
Header:头部组件
(1) 显示当前时间: 年-月-日 时:分:秒 
    config/Time.js 封装了显示的函数
(2) 显示当前温度: 调用百度天气接口API
(需要解决跨域问题 定义全局服务器代理API)
接口使用参考文章: https://www.sojson.com/blog/305.html
API: http://t.weather.sojson.com/api/weather/city/+ city.code
当前采用的是北京的code: 101010100

(四):
项目先进来，第一个页面是路由App.js
{this.props.children}
子路由  {this.props.match.params.name}

