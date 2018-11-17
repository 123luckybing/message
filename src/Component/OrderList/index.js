import React, { Component } from 'react';
import { Card,Table,message,Spin } from 'antd';
import Ordercolumns from './OrderData';
import axios from 'axios';
import baseUrl from '../../Config/BaseUrl';

class Orderlist extends Component {
  constructor() {
    super();
    this.state = {
      orderList:[],
      spinning: true,
      selectedRowKeys: '',
    }
  }

  componentDidMount() {
    axios.get(baseUrl + '/order/list').then( (res) => {
      this.setState({
        orderList: res.data.data,
        spinning: false,
      });
    }).catch( (err) => {
      message.error(err);
    });
  }

  render() {
    const { orderList,spinning } = this.state;
    // table前面单选框
    const rowSelection = {
      type: 'radio', // 单选还是多选
      onChange: (selectedRowKeys, selectedRows) => {
        this.props.getSelectId(selectedRowKeys);
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      }
    }
    return (
      <div>
        <Card>
          <Spin spinning={spinning}>
            <Table 
              bordered
              rowSelection={rowSelection} // 前面单选框
              columns={Ordercolumns} 
              dataSource={orderList}
            />
          </Spin>
        </Card>
      </div>
    )
  }
}
export default Orderlist;