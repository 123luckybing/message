import React, { Component } from 'react';
import { Table,Card,Spin } from 'antd';
import axios from 'axios';
import baseUrl from '../../Config/BaseUrl';
class StaffList extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
      loading: true, // 刚开始loading
    }
  }
  componentDidMount() {
    axios.get( baseUrl +'/staff/list').then((res) => {
      this.setState({
        data:res.data.result, 
        loading: false // 数据请求回来之后loading结束
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
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
      dataIndex: 'hobby',
      // 由于这里有react语法，所以不能把数据单独拿出来一个文件
      render(hobby) {
        return hobby.map( (elem,index) => {
          return <li key={index}>{elem}</li>
        });
      }
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
    const { loading,data } = this.state;
    const rowSelection = {
      type: 'radio', // 单选还是多选
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      }
    }
    return (
      <div>
        <Card>
          <Spin spinning={loading}>
            <Table 
              bordered
              rowSelection={rowSelection}
              columns={columns}
              dataSource = {data}
            />
          </Spin>
        </Card>
      </div>
    );
  }
}
export default StaffList;