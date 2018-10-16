import React, { Component } from 'react';
import { Card, Button, notification} from 'antd';
class NotificationCom extends Component {
  constructor() {
    super();
    this.noticeOpen = this.noticeOpen.bind(this);
  }
  noticeOpen(type,direction) {
    notification[type]({
      message: '发工资了',
      description: '出勤22天，总计2650元，请核对',
      placement:direction, 
    });
  }
  render() {
    return (
      <div>
        <Card title='通知提示框'>
          <Button onClick={() => this.noticeOpen('success','topLeft')}>success</Button>
          <Button onClick={() => this.noticeOpen('error','topRight')}>error</Button>
          <Button onClick={() => this.noticeOpen('warning','bottomLeft')}>warning</Button>
          <Button onClick={() => this.noticeOpen('info','bottomRight')}>info</Button>
        </Card>
      </div>
    );
  }
}
export default NotificationCom;