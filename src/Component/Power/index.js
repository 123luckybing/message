import React,{ Component } from 'react';
import { Button,Card } from 'antd';
import PowerList from '../PowerList';
class Power extends Component {
  constructor() {
    super();
    this.newPeople = this.newPeople.bind(this);
    this.setPower = this.setPower.bind(this);
    this.userPower = this.userPower.bind(this);
  }

  // 创建角色
  newPeople() {

  }

  // 设置权限
  setPower() {

  }

  // 用户授权
  userPower() {

  }

  render() {
    return (
      <div>
        <Card>
          <Button type='primary' onClick={this.newPeople}>创建角色</Button>
          <Button type='primary' onClick={this.setPower}>设置权限</Button>
          <Button type='primary' onClick={this.userPower}>用户授权</Button>
        </Card>
        <PowerList />
      </div>
    );
  }
}
export default Power;