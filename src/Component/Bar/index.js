import React, { Component } from 'react';
import { Card } from 'antd';
// 按需加载开始
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/chart/bar'; // 柱形图
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../../Config/theme';
// 按需加在结束

class Bar extends Component {
  constructor() {
    super();
    this.getOption = this.getOption.bind(this);
    this.getOptionTwo = this.getOptionTwo.bind(this);
  }

  componentWillMount() {
    echarts.registerTheme('theme',echartTheme)
  }

  getOptionTwo() {
    let option =  {
      color: ['#3398DB'],
      tooltip : {
        // trigger 触发哪一项
        trigger: 'axis', 
        axisPointer : {        
            type : 'line'     
        }
      },

      // 上面的三个颜色对应名称
      legend: {
        data: ['ofo','摩拜','小蓝']
      },
      
      // 图形名称
      title: {
        text:'用户骑行公司订单对比'
      },
      // x轴
      xAxis :{
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      // y轴
      yAxis: {
          type : 'value'
      },
      // 每一个里面有3个
      series : [
        {
            name:'ofo', // y轴描述
            type:'bar',
            data:[100, 502, 200, 334, 390, 330, 220] // ofo从周一到周五
        },{
          name:'摩拜', // y轴描述
          type:'bar',
          data:[10, 52, 260, 334, 340, 310, 320]
        },{
          name:'小蓝', // y轴描述
          type:'bar',
          data:[100, 520, 600, 434, 370, 310, 290]
        }
      ]
    }
    return option;
  }

  getOption() {
    // 配置项
    let option =  {
      color: ['#3398DB'],
      // 当鼠标移入
      tooltip : {
        trigger: 'axis', // 当鼠标移入，展示x轴数据
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      // 图形名称
      title: {
        text:'用户骑行订单'
      },
      // x轴
      xAxis :{
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      // y轴
      yAxis: {
          type : 'value'
      },
      series : [
        {
            name:'访问量', // y轴描述
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
      ]
    }
    return option;
  }

  render() {
    return (
      <div>
        <Card title='柱形图表(一)'>
          <ReactEcharts 
            option={this.getOption()}
            theme={echartTheme}
          />
        </Card>
        <Card title='柱形图表(二)'>
          <ReactEcharts 
            option={this.getOptionTwo()}
            theme={echartTheme}
          /> 
        </Card>
      </div>
    );
  }
}
export default Bar;
