import React, { Component } from 'react';
import { Modal } from 'antd';
class UserPower extends Component {
  constructor() {
    super();
    this.cancel = this.cancel.bind(this);
  }
  
  cancel() {
    this.props.cancel();
  }

  render() {
    const { visible } = this.props;
    return (
      <div>
        <Modal 
          title='用户授权'
          visible={visible}
          onCancel={this.cancel}
        >
          用户授权
        </Modal>
     </div>
    );
  }
}
export default UserPower;