import React, { Component } from 'react';
import { Table,Card } from 'antd';
class TableBasic extends Component {

  render() {
    // 表头
    const columns = [{
      title: '姓名', // 列展示的内容
      dataIndex: 'name' // 字段属性值
    },{
      title: '年龄', 
      dataIndex: 'age' 
    },{
      title: '性别', 
      dataIndex: 'sex' 
    },{
      title: '状态', 
      dataIndex: 'state'
    },{
      title: '爱好', 
      dataIndex: 'hobby'
    },{
      title: '生日',
      dataIndex: 'birth'
    },{
      title: '地址',
      dataIndex: 'address'
    },{
      title: '早起时间',
      dataIndex: 'time'
    }];
    // 数据源一般是请求接口的,一般写在componentDidMount(){}里
    const data = [{
      name:'周芳冰',
      age:'21',
      sex:'女',
      state:'前端',
      hobby: '羽毛球',
      birth: '1997-4-9',
      address:'北京',
      time: '6:00'
    }];
    return (
      <div>
        <Card title='表格'>
          <Table 
            bordered //带边框
            columns={columns}    // 定义表头
            dataSource={data}
            pagination={false} //  是否分页
          />
        </Card>
      </div>
    );
  }
}
export default TableBasic;