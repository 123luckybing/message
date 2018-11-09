import React, { Component } from 'react';
import './index.less';
import API from '../../Config/Api';
import axios from 'axios';
// 调用日期转换组件 Time.Date(a);
import Time from '../../Config/Time';

import { Row,Col } from 'antd';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      username: 'lucky周芳冰',
      time:'',
      wendu: '',
    }
    this.getTodayWeather = this.getTodayWeather.bind(this);
  }
  componentWillMount() {
    this.getTodayWeather(); // 获取天气
    setInterval(() => {
      const time = Time.Date(new Date());
      this.setState({
        time,
      });
    },1000);
  }
  getTodayWeather() {
     // 解决跨域问题 jsonp插件
    let url = API + 'http://t.weather.sojson.com/api/weather/city/101010100';
    axios.get(url).then((res) => {
      this.setState({
        wendu: res.data.data.wendu,
      });
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    const { 
      username, 
      time,
      wendu
    } = this.state;
    return (
      <div className='header-wrapper'>
        <Row className="first">
          <Col span={24}>
            <span>欢迎！</span>
            <span>{username}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className='second'>
          <Col span={4} className="home">
              首页
          </Col>
          <Col span={20} className="today">
            <span className="today-data">时间:{time}</span>
            <span className="today-weather">温度:{wendu}摄氏度</span>
          </Col>
        </Row>
        <div className="triangle"></div>
      </div>
    );
  }
}
export default Header;