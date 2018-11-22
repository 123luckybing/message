import React,{ Component } from 'react';
import { Button,Card } from 'antd';
import PowerList from '../PowerList';
import NewPower from '../NewPower';
import SetPower from '../SetPower';
import UserPower from '../UserPower';
class Power extends Component {
  constructor() {
    super();
    this.state = {
      newPower: false,
      setPower: false,
      userPower: false,
    }
    this.newPeople = this.newPeople.bind(this);
    this.setPower = this.setPower.bind(this);
    this.userPower = this.userPower.bind(this);
    this.newCancel = this.newCancel.bind(this);
    this.userCancel = this.userCancel.bind(this);
    this.setCancel = this.setCancel.bind(this);
  }

  // 设置权限关闭弹窗
  setCancel() {
    this.setState({
      setPower: false,
    });
  }

  // 创建角色
  newPeople() {
    this.setState({
      newPower: true,
    });
  }

  // 设置权限
  setPower() {
    this.setState({
      setPower: true,
    });
  }
  
  // 新建用户取消
  newCancel() {
    this.setState({
      newPower: false,
    });
  }

  // 用户授权
  userPower() {
    this.setState({
      userPower: true,
    });
  }

  // 取消用户授权
  userCancel() {
    this.setState({
      userPower: false,
    });
  }
  render() {
    const { newPower,setPower,userPower} = this.state;
    return (
      <div>
        <Card>
          <Button type='primary' onClick={this.newPeople}>创建角色</Button>
          <Button type='primary' onClick={this.setPower}>设置权限</Button>
          <Button type='primary' onClick={this.userPower}>用户授权</Button>
        </Card>
        <PowerList />
        {/* 创建角色弹窗 */}
        <NewPower visible={newPower} cancel={this.newCancel}/>
         {/* 设置权限弹窗 */}
        <SetPower visible={setPower} cancel={this.setCancel}/>
         {/* 用户授权弹窗 */}
        <UserPower visible={userPower} cancel={this.userCancel}/>
      </div>
    );
  }
}
export default Power;