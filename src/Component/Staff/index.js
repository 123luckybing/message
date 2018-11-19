import React, { Component } from 'react';
import StaffLogin from '../StaffLogin';
import StaffList from '../StaffList';
import { Button,Card,Modal } from 'antd';
import EditStaff from '../EditStaff';
import StaffAdd from '../StaffAdd';
import StaffDelete from '../StaffDelete';
import StaffDetail from '../StaffDetail';
class Staff extends Component {
  constructor() {
    super();
    this.state = {
      title: '1',
      visible:false,
      modalContent:''
    }
    this.openModal = this.openModal.bind(this);
    this.ok = this.ok.bind(this);
  }

  // 打开弹窗
  openModal(type) {
    this.setState({
      visible: true,
    });
    if(type === 'add') {
      this.setState({
        title: '创建员工',
        modalContent: <StaffAdd />
      });
    } else if( type === 'edit' ) {
      this.setState({
        title: '编辑员工',
        modalContent: <EditStaff />
      });
    } else if( type === 'detail' ) {
      this.setState({
        title: '员工详情',
        modalContent: <StaffDetail />
      });
    } else {
      this.setState({
        title: '删除员工',
        modalContent: <StaffDelete />
      });
    }
  }

  // 点击弹窗ok
  ok() {

  }
  render() {
    const { title,visible,modalContent } = this.state;
    return(
      <div>
        <StaffLogin />
        <Card>
          <Button type='primary' onClick={() => this.openModal('add')} icon='plus'>创建员工</Button>
          <Button type='primary' onClick={() => this.openModal('edit')} icon='edit'>编辑员工</Button>
          <Button type='primary' onClick={() => this.openModal('detail')}>员工详情</Button>
          <Button type='danger'  onClick={() => this.openModal('del')} icon='delete'>删除员工</Button>
        </Card>
        <Modal
          title={title}
          visible={visible}
          onOk={this.ok}
          onCancel={() => {this.setState({visible: false})}}
        >
          { modalContent }
        </Modal>
        <StaffList />
      </div>
    );
  }
}
export default Staff;