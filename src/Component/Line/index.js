import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import { Card } from 'antd';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/chart/line'; // 饼图
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../../Config/theme';
class Pie extends Component {
  constructor() {
    super();
    this.getOption = this.getOption.bind(this);
    this.getOptionTwo = this.getOptionTwo.bind(this);
  }

  getOption() {
    let option = {
      xAxis : {
        formatter: '{a}: {b}<br />{c}',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        name:'用户量',
        // areaStyle: {}  下方填充面积
      }],
      tooltip: {
        trigger: 'axis',
      },
    }
    return option;
  }

  getOptionTwo() {
    let option = {
      legend: {
        orient: 'vericle',
        right: 0,
        data:['ofo','摩拜','小蓝']
      },
      xAxis : {
        formatter: '{a}: {b}<br />{c}',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 952, 901, 734, 190, 1330, 1320],
        type: 'line',
        name:'ofo',
      },{
        data: [820, 942, 961, 347, 290, 130, 130],
        type: 'line',
        name:'摩拜'
      },{
        data: [820, 932, 451, 947, 1290, 330, 120],
        type: 'line',
        name:'小蓝'
      }],
      tooltip: {
        trigger: 'axis',
      },
    }
    return option;
  }

  render() {
    return (
      <div>
        <Card
          title='用户骑行折线图'
        >
          <ReactEcharts 
            theme={echartTheme}
            option={this.getOption()}
          />
        </Card>
        <Card
          title='用户骑行折线图对比'
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