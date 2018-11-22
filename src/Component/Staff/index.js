import React, { Component } from 'react';
import StaffLogin from '../StaffLogin';
import StaffList from '../StaffList';
import { Button,Card } from 'antd';
import EditStaff from '../EditStaff';
import StaffAdd from '../StaffAdd';
import StaffDelete from '../StaffDelete';
import StaffDetail from '../StaffDetail';
class Staff extends Component {
  constructor() {
    super();
    this.state = {
      addShow:false,
      deleteShow: false,
      editShow: false,
      detailShow: false,
    }
    this.openModal = this.openModal.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.editCancel = this.editCancel.bind(this);
  }

  // 编辑员工关闭弹窗
  editCancel() {
    this.setState({
      editShow: false
    });
  }

  // 增加员工关闭弹窗
  cancelAdd() {
    this.setState({
      addShow: false
    });
  }

  // 打开弹窗
  openModal(type) {
    if(type === 'add') {
      this.setState({
        addShow: true,
      });
    } else if( type === 'edit' ) {
      this.setState({
        editShow: true,
      });
    } else if( type === 'detail' ) {
      this.setState({
        deleteShow: true,
      });
    } else {
      this.setState({
        detailShow: true,
      });
    }
  }

  render() {
   const { addShow,deleteShow,editShow,detailShow } = this.state;
    return(
      <div>
        <StaffLogin />
        <Card>
          <Button type='primary' onClick={() => this.openModal('add')} icon='plus'>创建员工</Button>
          <Button type='primary' onClick={() => this.openModal('edit')} icon='edit'>编辑员工</Button>
          <Button type='primary' onClick={() => this.openModal('detail')}>员工详情</Button>
          <Button type='danger'  onClick={() => this.openModal('del')} icon='delete'>删除员工</Button>
        </Card>
         <StaffAdd visible={addShow} cancelAdd={this.cancelAdd}/>
         <StaffDelete visible={deleteShow}/>
         <StaffDetail visible={detailShow}/>
         <EditStaff visible={editShow} editCancel={this.editCancel}/>
        <StaffList />
      </div>
    );
  }
}
export default Staff;