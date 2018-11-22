import React, { Component } from 'react';
import { Modal } from 'antd';
class SetPower extends Component {
  constructor() {
    super();
    this.setCancel = this.setCancel.bind(this);
  }

  // 设置权限关闭弹窗
  setCancel() {
    this.props.cancel();
  }

  render() {
    const { visible } = this.props;
    return (
      <div>
        <Modal
          title='设置权限'
          visible={visible}
          onCancel={this.setCancel}
        >
          设置权限
        </Modal>
      </div>
    );
  }
}
export default SetPower;