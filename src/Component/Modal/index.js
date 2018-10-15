import React, { Component } from 'react';
import { Modal, Card, Button } from 'antd';
class ModalCom extends Component {
  constructor() {
    super();
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    }
    this.open = this.open.bind(this);
    this.ok = this.ok.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  ok() {
    this.setState({
      showModal1: false,
    });
  }

  cancel() {
    this.setState({
      showModal1: false,
    });
  }

  open(type) {
    this.setState({
      [type]: true, // 修改传进来的参数，用中括号扩上，比较方便的办法，不用中括号会把它当成变量～～
    });
  }

  render() {
    const { showModal1,showModal2 } = this.state;
    return (
      <div>
        <Card title='基础弹框'>
          <Button type='primary' onClick={() => this.open('showModal1')}>Open</Button>
          <Button type='primary' onClick={() => this.open('showModal2')}>自定义页脚</Button>
          <Button type='primary' onClick={() => this.open('showModal3')}>顶部20px</Button>
          <Button type='primary' onClick={() => this.open('showModal4')}>水平垂直居中</Button>
          <Modal 
            title='基础框'
            visible={showModal1}
            onOk={this.ok}
            onCancel={this.cancel}
          >
            q
          </Modal>
          <Modal 
            title='自定义页脚'
            visible={showModal2}
            onOk={this.ok}
            onCancel={this.cancel}
          >
            q
          </Modal>
        </Card>
      </div>
    );
  }
}
export default ModalCom;