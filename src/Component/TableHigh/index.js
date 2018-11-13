import React, { Component } from 'react';
import { Table,Card,Spin } from 'antd';
import axios from 'axios';
class TableHigh extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
      loading: true, // 刚开始loading
    }
  }
  componentDidMount() {
    // https://www.easy-mock.com/mock/5bea34fce6cbf97ac3a87d89/message/tabletest 接口预览的地址
    let baseUrl = 'https://www.easy-mock.com/mock/5bea34fce6cbf97ac3a87d89/message';
    axios.get( baseUrl +'/tabletest').then((res) => {
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
    }];
    const { loading } = this.state;
    return (
      <div>
        <Spin spinning={loading}>
          <Card title='mock假数据'>
            <Table 
              bordered
              columns={columns}
              dataSource = {this.state.data}
            />
          </Card>
        </Spin>
      </div>
    );
  }
}
export default TableHigh;