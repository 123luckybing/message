import React, { Component } from 'react';
import { Card,Switch,Spin,Icon,Alert,Radio } from 'antd';
const RadioGroup = Radio.Group;
class Loading extends Component {
  constructor() {
    super();
    this.state = {
      type: 'info',
      spinning: false,
    }
    this.changeType = this.changeType.bind(this);
    this.spinChange = this.spinChange.bind(this);
  }

  changeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  spinChange(value) {
    this.setState({
      spinning: value,
    });
  }

  render() {
    const { type,spinning } = this.state;
    const icon = <Icon type='loading'/>
    return (
      <div className='loading-wrapper'>
        <Card title='卡片的用法'>
          <Spin size='large'/>
          <Spin />
          <Spin size='small'/>
          <Spin indicator={icon}/>
        </Card>
        <Card title='内容遮罩'>
          样式自选:<br/>
          <RadioGroup onChange={this.changeType}>
          <Radio value='warning'>warning</Radio>
          <Radio value='info'>info</Radio>
          <Radio value='success'>success</Radio>
          <Radio value='error'>error</Radio>
          </RadioGroup>
          {/* 把Spin嵌套在外面～在外面旋转 */}
          <Spin tip='加载ing'>
            <Alert
              message='周芳冰' // 标题
              description='lucky周芳冰' // 内容
              type={type}
            />
          </Spin>
        </Card>
        <Card title='实际运用'>
          change Spin: <Switch onChange={this.spinChange}/>
          <Spin spinning={spinning}>
            <Alert 
              message='lucky'
              description='luckyBing'
            />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Loading;