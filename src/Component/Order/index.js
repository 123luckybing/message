import React, { Component } from 'react';
import OrderSearch from '../OrderSearch';
import OrderList from '../OrderList';
import { Card,Button,Modal,Form,message } from 'antd';
import axios from 'axios';
import baseUrl from '../../Config/BaseUrl';
const FormItem = Form.Item;
class Order extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      info:{},
      // selectedRows: {},
      // selectedRowKeys: '',
    }
    this.orderFinished = this.orderFinished.bind(this);
    this.ok = this.ok.bind(this);
    this.cancel = this.cancel.bind(this);
    this.getList = this.getList.bind(this);
    this.getSelectId = this.getSelectId.bind(this);
    this.orderDetail = this.orderDetail.bind(this);
  }

  // 点击订单详情
  orderDetail() {
    const { selectedRowKeys,selectedRows } = this.state;
     // 判断有没有选择订单
    if(selectedRowKeys !== undefined) { 
      this.props.history.push(`/order/detail/${selectedRows[0].orderNumber}`);
    } else {
      message.warning('请选择订单');
    }
  }

  // 当单选按钮后，获取id
  getSelectId(selectedRowKeys,selectedRows) {
    console.log(selectedRowKeys,selectedRows);
    this.setState({
      selectedRowKeys: selectedRowKeys[0],
      selectedRows: selectedRows,
    });
  }

  // 获取订单列表
  getList() {
    axios.get(baseUrl + '/order/finish_info').then((res) => {
      this.setState({
        info: res.data.data,
      });
    }).catch( (err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.getList();
  }

  // modal点击ok
  ok() {
    const { info } = this.state;
    axios.get(baseUrl + '/order/finish_over',{
      params: {
        finishId: info.id, // 传要取消的id
      }
    }).then((res) => {
      message.info(res.data.result);
      this.getList(); // 重新刷新列表
      this.setState({
        visible: false,
      });
    }).catch( (err) => {
      console.log(err);
    });
  }

  // modal点击cancel
  cancel() {
    this.setState({
      visible: false,
    });
  }

  // 点击结束订单
  orderFinished() {
    const { selectedRowKeys } = this.state;
    // 判断有没有选择订单
    if(selectedRowKeys !== undefined) { 
      this.setState({
        visible: true,
      });
    } else {
      message.warning('请选择订单');
    }
  }

  render() {
    const { visible,info } = this.state;
    const layoutForm = {
      labelCol: {
        md:6
      },
      wrapperCol: {
        md: 17
      },
    }
    return(
      <div>
        <OrderSearch />
        <Card>
          <Button type='primary' onClick={this.orderDetail}>订单详情</Button>
          <Button type='primary' onClick={this.orderFinished}>结束订单</Button>
        </Card>
        <OrderList getSelectId={this.getSelectId}/>
        <Modal 
          title='结束订单'
          visible={visible}
          onOk={this.ok}
          onCancel={this.cancel}
        >
          <Form>
            <FormItem label='车辆编号' {...layoutForm}>
              {info.id}
            </FormItem>
            <FormItem label='剩余电量' {...layoutForm}>
              {info.battery}%
            </FormItem>
            <FormItem label='行程开始时间' {...layoutForm}>
              {info.start_time}
            </FormItem>
            <FormItem label='当前位置' {...layoutForm}>
              {info.location}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Order;