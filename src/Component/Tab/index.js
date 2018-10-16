import React, { Component } from 'react';
import { Card,Tabs,message,Icon } from 'antd';
import tablist from '../../Config/Tab.js';
import { spawn } from 'child_process';
const TabPane = Tabs.TabPane;
// 选项卡
class TabCom extends Component {
  constructor() {
    super();
    this.state = {
      tabList:'',
    }
    this.tabChange = this.tabChange.bind(this);
  }

  componentWillMount() {
    // 先请求数据
    this.setState({
      tabList:tablist,
    });
  }

  tabChange(key) {
    message.info(`you have choosen ${key}`);
  }

  render() {
    const { tabList } = this.state;
    const tabPane = tabList.map((elem) => {
      return (
        <TabPane tab={elem.tabContent} key={elem.key}>{elem.content}</TabPane>  
      )
    });
    return (
      <div>
        <Card title='Tab标签'>
          <Tabs defaultActiveKey='1' onChange={this.tabChange}>
            {/* key是必须的 */}
            <TabPane key='1' tab='杨幂'>杨幂</TabPane>
            <TabPane key='2' tab='刘诗诗'>刘诗诗</TabPane>
            <TabPane key='3' tab='赵丽颖'>赵丽颖</TabPane>
            <TabPane key='4' tab='郑爽'>郑爽</TabPane>
          </Tabs>
        </Card>
        {/* tab里面的内容用一个大的标签包起来 */}
        <Card title='Tab标签嵌入icon'>
          <Tabs defaultActiveKey='1'>
            <TabPane
              key='1' 
              tab={
                <span>
                  <Icon type='heart'/>
                  小心心
                </span>
              }
            >content1</TabPane>
            <TabPane
              key='2' 
              tab={
                <span>
                  <Icon type='left'/>
                  左
                </span>
              }
              >content2</TabPane>
            <TabPane
              key='3' 
              tab={
                <span>
                  <Icon type='right'/>
                  右
                </span>
              }
            >content2</TabPane>
          </Tabs>
        </Card>
        <Card title='循环生成tab'>
          <h4>《最美的时光》演员表</h4>
          <Tabs
            type="editable-card" //  可编辑的
          >
            {tabPane}
          </Tabs>
        </Card>
      </div>
    );
  }
}
export default TabCom;