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
