import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import { Card } from 'antd';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/chart/pie'; // 饼图
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../../Config/theme';
class Pie extends Component {
  constructor() {
    super();
    this.getOption = this.getOption.bind(this);
    this.getOptionTwo = this.getOptionTwo.bind(this);
  }
  getOptionTwo() {
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      title: {
        x: 'center',
        text: '宣传方式'
      },
      legend: {
        orient: 'vertical',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        x: 'right'
      },
      series: [{
        name: '访问来源',
        type:'pie',
        radius: ['50%', '70%'], // 变成环形 两个圆的尺寸
        data:[
          {value:335, name:'直接访问'},
          {value:310, name:'邮件营销'},
          {value:234, name:'联盟广告'},
          {value:135, name:'视频广告'},
          {value:1548, name:'搜索引擎'}
        ]
      }],
    }
    return option;
  }

  getOption() {
    let option = {
      title: {
        x: 'center', // 标题水平居中
        text: '用户骑行饼图'
      },
      // 当鼠标触发
      tooltip: {
        trigger: 'item',
        formatter:'{a}<br/>{b}:{c}({d}%)'
      },
      legend: {
        orient: 'vertical', // 排列方式(默认是横的)
        right: 0, // 距离右侧的距离
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      series: [{
        name: '订单量', 
        type: 'pie', // 饼图
        data: [{
          name: 'Mon', // 名字
          value: 1000
        },{
          name: 'Tue', // 名字
          value: 1100
        },{
          name: 'Wed', // 名字
          value: 1200
        },{
          name: 'Thu', // 名字
          value: 1300
        },{
          name: 'Fri', // 名字
          value: 1400
        },{
          name: 'Sat', // 名字
          value: 1500
        },{
          name: 'Sun', // 名字
          value: 1600
        }]
      }]
    }
    return option;
  }

  render() {
    return (
      <div>
        <Card
          title='饼图骑行订单'
        >
          <ReactEcharts 
            theme={echartTheme}
            option={this.getOption()}
          />
        </Card>
        <Card
          title='宣传方式统计'
        >
          <ReactEcharts 
            theme={echartTheme}
            option={this.getOptionTwo()}
          />
        </Card>
      </div>
    );
  }
}
export default Pie;