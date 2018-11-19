import React, { Component } from 'react';
import { Card,Form } from 'antd';
import axios from 'axios';
import baseUrl from '../../Config/BaseUrl';
import OrderMap from '../OrderMap';
const FormItem = Form.Item;
class OrderDetail extends Component {
  constructor() {
    super();
    this.state = {
      basicInfo: {},
      driveTrack: {},
    }
  }

  componentDidMount() {
    // 基础信息接口(其实应该是在后面拼接id的)
    axios.get(baseUrl + '/order/detail').then((res) => {
      this.setState({
        basicInfo:res.data.result,
      });
    }).catch((err) => {
      console.log(err);
    });

    // 行驶轨迹接口(其实应该是在后面拼接id的)
    axios.get(baseUrl + '/order/distance').then((res) => {
      this.setState({
        driveTrack:res.data.data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const layoutForm = {
      labelCol: {
        md: 4,
      },
      wrapperCol: {
        md: 16
      }
    }
    const { basicInfo,driveTrack } = this.state;
    return (
      <div>
        <Card
          style={{
            marginTop: '20px'
          }}
          // 订单编号通过路由传过来的
          title={`当前订单编号是:${this.props.match.params.orderNumber}`}
        >
          {/* 地图 */}
          <OrderMap />
        </Card>
        <div style={{
          width: '800px',
          margin: '0 auto',
          border: '1px solid #ccc',
          marginTop: '30px'
        }}>
          <Card
            title= '基础信息'
          >
            <Form>
              <FormItem {...layoutForm} label='用车模式'>
                {basicInfo.carMode}
              </FormItem>
              <FormItem {...layoutForm} label='订单编号'>
                {basicInfo.orderNum}
              </FormItem>
              <FormItem {...layoutForm} label='车辆编号'>
                {basicInfo.carNum}
              </FormItem>
              <FormItem {...layoutForm} label='用户姓名'>
                {basicInfo.userName}
              </FormItem>
              <FormItem {...layoutForm} label='手机号码'>
                {basicInfo.tele}
              </FormItem>
            </Form>
          </Card>
          <Card
            title='行驶轨迹'
          >
            <Form>
              <FormItem {...layoutForm} label='行程起点'>
                {driveTrack.start_loc}
              </FormItem>
              <FormItem {...layoutForm} label='行程终点'>
                {driveTrack.end_loc}
              </FormItem>
              <FormItem {...layoutForm} label='行驶里程'>
                {`${driveTrack.total_distance}km`}
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
export default OrderDetail;
