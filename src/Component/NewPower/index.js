import React, { Component } from 'react';
import { Modal } from 'antd';
class NewPower extends Component {
  constructor() {
    super();
    this.newCancel = this.newCancel.bind(this);
  }

  // 设置权限关闭弹窗
  newCancel() {
    this.props.cancel();
  }

  render() {
    const { visible } = this.props;
    return (
      <div>
        <Modal
          title='创建角色'
          visible={visible}
          onCancel={this.newCancel}
        >
          创建角色
        </Modal>
      </div>
    );
  }
}
export default NewPower;