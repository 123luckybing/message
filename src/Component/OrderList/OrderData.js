const columns = [
  {
    title: '订单编号',
    dataIndex:'orderNumber'
  },{
    title: '车辆编号',
    dataIndex:'carNumber'
  },{
    title: '用户名',
    dataIndex:'username'
  },{
    title: '手机号码',
    dataIndex: 'tele'
  },{
    title: '里程',
    dataIndex:'distance'
  },{
    title: '行程时常',
    dataIndex: 'tourTime'
  },{
    title: '状态',
    dataIndex:'status',
    render(status) {
      switch (status) {
        case 1 : 
          status = '进行中'; 
          break;
        case 2 : 
          status = '运行中(临时锁车)'; 
          break;
        case 3 : 
          status = '行程结束'; 
          break;
        default :
          status = '无结果';
      }
      return status;  // 最后return一下
    } 
  },{
    title:'开始时间',
    dataIndex:'startTime'
  },{
    title: '结束时间',
    dataIndex:'endTime'
  },{
    title:'订单金额',
    dataIndex: 'orderMoney'
  },{
    title: '实付金额',
    dataIndex:'ownMoney'
  }
];
export default columns;