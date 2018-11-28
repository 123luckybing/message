import React,{ Component } from 'react';
import { Button,Card } from 'antd';
import PowerList from '../PowerList';
import NewPower from '../NewPower';
import SetPower from '../SetPower';
import UserPower from '../UserPower';
import axios from 'axios';
import baseUrl from '../../Config/BaseUrl';
class Power extends Component {
  constructor() {
    super();
    this.state = {
      newPower: false,
      setPower: false,
      userPower: false,
      treeData:[]
    }
    this.newPeople = this.newPeople.bind(this);
    this.setPower = this.setPower.bind(this);
    this.userPower = this.userPower.bind(this);
    this.newCancel = this.newCancel.bind(this);
    this.userCancel = this.userCancel.bind(this);
    this.setCancel = this.setCancel.bind(this);
    this.treeSelect = this.treeSelect.bind(this);
  }

  // 获取设置权限列表
  treeSelect() {
    axios.get(baseUrl + '/serPower/treeSelect').then( (res) => {
      this.setState({
        treeData: res.data.result
      });
    }).catch( (res) => {
      console.log(res);
    });
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
    this.treeSelect(); // 点击按钮调设置权限的数据
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
        <NewPower 
          visible={newPower} 
          cancel={this.newCancel}
        />
         {/* 设置权限弹窗 */}
        <SetPower 
          visible={setPower} 
          cancel={this.setCancel} 
          treeData = {this.state.treeData}
        />
         {/* 用户授权弹窗 */}
        <UserPower 
          visible={userPower} 
          cancel={this.userCancel}
        />
      </div>
    );
  }
}
export default Power;