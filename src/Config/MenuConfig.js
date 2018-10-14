// 左侧菜单以及路由定义 (模拟后台接口)
// export defaut 暴露出来
const menuList = [
  {
    title: '首页',
    path: '/admin/home'
  },{
    title: 'UI',
    path:'／admin/ui',
    children:[
      {
        title: '按钮',
        path: '/admin/ui/bottom'
      },{
        title: '弹框',
        path: '/admin/ui/modals'
      },{
        title:'Loading',
        path:'/loading'
      },{
        title:'通知提醒',
        path:'/notice'
      },{
        title:'全局提示',
        path:'/message'
      },{
        title:'Tab页签',
        path:'/tab'
      },{
        title:'图片画廊',
        path:'/picWall'
      },{
        title:'轮播图',
        path:'/lunbo'
      }
    ]
  },{
    title:'表单',
    path:'/form'
  },{
    title:'表格',
    path:'/table'
  },{
    title:'富文本',
    path:'/text'
  },{
    title:'城市管理',
    path:'/city'
  },{
    title:'订单管理',
    path:'/order'
  },{
    title:'员工管理',
    path:'/person'
  },{
    title:'车辆地图',
    path:'/bikeMap'
  },{
    title:'图标',
    path:'/icon'
  },{
    title:'权限设置',
    path:'/power'
  }
];

export default menuList;