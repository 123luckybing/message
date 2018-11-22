import React, { Component } from 'react';
import { Table,Card } from 'antd';
import baseUrl from '../../Config/BaseUrl';
import axios from 'axios';
const columns = [{
  title: '角色id',
  dataIndex:'id'
},{
  title: '角色名称',
  dataIndex:'name'
},{
  title: '创建时间',
  dataIndex:'time'
},{
  title: '授权人',
  dataIndex:'people'
},{
  title: '使用状态',
  dataIndex:'status'
},{
  title: '授权时间',
  dataIndex:'power_time'
}];
const rowSelection = {
  type:'radio',
}
class PowerList extends Component {
  constructor() {
    super();
    this.state = {
      powerList:[],
    }
  }

  componentDidMount() {
    axios.get(baseUrl+ '').then( (res) => {
      this.setState({
        powerList:res.data.result,
      });
    } ).catch( (err) => {
      console.log(err);
    });
  }

  render() {

    return(
      <div>
        <Card >
          <Table
            bordered
            rowSelection={rowSelection}
            columns={columns}
          />
        </Card>
      </div>
    );
  }
}
export default PowerList;