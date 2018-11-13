const columns = [{
  title: '城市id',
  dataIndex: 'cityId',
},{
  title: '城市名称',
  dataIndex: 'cityName',
},{
  title: '用车模式',
  dataIndex: 'useMode',
  render(useMode) {
    return useMode === 1 ? '制定停车点模式':'禁停区模式'
  }
},{
  title: '营运模式',
  dataIndex: 'companyMode',
  render(companyMode) {
    return companyMode === 1 ? '自营' :'加盟'
  }
},{
  title: '授权加盟商',
  dataIndex: 'jiaCompany',
  render(jiaCompany) {
    return jiaCompany === 1 ? '已授权' : '未授权'
  }
},{
  title: '城市管理员',
  dataIndex: 'cityMessager',
},{
  title: '城市开通时间',
  dataIndex: 'cityOpenTime',
},{
  title: '操作时间',
  dataIndex: 'operateTime',
},{
  title: '操作人',
  dataIndex: 'operateperson',
}];
export default columns;