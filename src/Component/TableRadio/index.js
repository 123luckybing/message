import React, { Component } from 'react';
import { Table,Card,Spin,Modal } from 'antd';
import axios from 'axios';
class TableRadio extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
      selectedRowKeys:'',
      loading: true, // 刚开始loading
    }
    this.onRowClick = this.onRowClick.bind(this);
  }

  // 点击每一行的时候
  onRowClick(record,index) {
    this.setState({
      selectedRowKeys: String(index), // 字符串形式
    });
    Modal.info({
      title: '详情信息',
      content:
      <div>
        <li>姓名: {record.name}</li>
        <li>年龄: {record.age}</li>
        <li>性别: {record.sex}</li>
      </div>
    });
  }

  componentDidMount() {
    let baseUrl = 'https://www.easy-mock.com/mock/5bea34fce6cbf97ac3a87d89/message';
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
      title:'姓名',
      dataIndex: 'name'
    },{
      title:'年龄',
      dataIndex: 'age'
    },{
      title:'性别',
      dataIndex: 'sex',
      // 后端接口返回的 1/2 然后进行判断
      render(sex) {
        return sex === 1 ? '男':'女';
      }
    }];
    const { loading,selectedRowKeys } = this.state;
    const rowSelection = {
      type:'radio',
      selectedRowKeys, // 当前选中的index 
    }
    return (
      <div>
        <Spin spinning={loading}>
          <Card title='点击显示详情信息'>
            <Table 
              rowSelection = {rowSelection} // 单选按钮
              bordered
              // 当点击行的时候,执行onRow事件
              onRow = { (record,index) => {
                return {
                  onClick: () => {
                    this.onRowClick(record,index);
                  }
                }
              }}
              columns={columns}
              dataSource = {this.state.data}
            />
          </Card>
        </Spin>
      </div>
    );
  }
}
export default TableRadio;