// 左侧菜单以及路由定义 (模拟后台接口)
// export defaut 暴露出来
const menuList = [
  {
    title: '首页',
    path: '/admin'
  },{
    title: 'UI',
    path:'/admin/ui',
    children:[
      {
        title: '按钮',
        path: '/admin/ui/button'
      },{
        title: '弹框',
        path: '/admin/ui/modals'
      },{
        title:'Loading',
        path:'/admin/ui/loading'
      },{
        title:'通知提醒',
        path:'/admin/ui/notice'
      },{
        title:'全局提示',
        path:'/admin/ui/message'
      },{
        title:'Tab页签',
        path:'/admin/ui/tab'
      },{
        title:'图片画廊',
        path:'/admin/ui/picWall'
      },{
        title:'轮播图',
        path:'/admin/ui/lunbo'
      }
    ]
  },{
    title:'表单',
    path:'/admin/form',
    children:[
      {
        title:'登录',
        path:'/admin/form/login'
      },{
        title:'注册',
        path: '/admin/form/register'
      }
    ]
  },{
    title:'表格',
    path:'/admin/table',
    children:[
      {
        title: '基础表格',
        path: '/admin/table/basic'
      },{
        title: '高级表格Mock',
        path: '/admin/table/high'
      }
    ]
  },{
    title:'富文本',
    path:'/admin/text'
  },{
    title:'城市管理',
    path:'/admin/city'
  },{
    title:'订单管理',
    path:'/admin/order'
  },{
    title:'员工管理',
    path:'/admin/person'
  },{
    title:'车辆地图',
    path:'/admin/bikeMap'
  },{
    title:'图标',
    path:'/admin/icon'
  },{
    title:'权限设置',
    path:'/admin/power'
  }
];

export default menuList;