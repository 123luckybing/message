import React, { Component } from 'react';
import { Modal } from 'antd';
class StaffDetail extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  // 关闭员工详情弹窗
  close() {
    this.props.close();
  }

  render() {
    const { visible } = this.props;
    return (
      <div>
        <Modal
          title='员工详情'
          visible={visible}
          footer={null}
          onCancel={this.close}
        >
          2
        </Modal>
      </div>
    )
  }
}
export default StaffDetail;