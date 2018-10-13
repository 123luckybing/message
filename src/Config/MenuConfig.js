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
      }
    ]
  }
];

export default menuList;