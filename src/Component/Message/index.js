import React, { Component } from 'react';
import { message,Button,Card } from 'antd';
class MessageCom extends Component {
  constructor() {
    super();
    this.showMessage = this.showMessage.bind(this);
  }

  showMessage(type) {
    message[type](`this is ${type}`); 
    // [type]动态变量的样式  message.type();
  }

  render() {
    return (
      <div>
        <Card title='全局提示框'>
          <Button onClick={() => this.showMessage('success')}>Success</Button>
          <Button onClick={() => this.showMessage('info')}>Info</Button>
          <Button onClick={() => this.showMessage('warning')}>Warning</Button>
          <Button onClick={() => this.showMessage('error')}>Error</Button>
          <Button onClick={() => this.showMessage('loading')}>Loading</Button>
        </Card>
      </div>
    );
  }
}
export default MessageCom;