import React, { Component } from 'react';
import StaffLogin from '../StaffLogin';
import StaffList from '../StaffList';
import { Button,Card,message } from 'antd';
import EditStaff from '../EditStaff';
import StaffAdd from '../StaffAdd';
import baseUrl from '../../Config/BaseUrl';
import StaffDetail from '../StaffDetail';
import axios from 'axios';
class Staff extends Component {
  constructor() {
    super();
    this.state = {
      addShow:false,
      deleteShow: false,
      editShow: false,
      detailShow: false,
      valueDetail:[],
      id:[],
    }
    this.openModal = this.openModal.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.editCancel = this.editCancel.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
    this.detail = this.detail.bind(this);
    this.delete = this.delete.bind(this);
  }

  // 删除员工的id
  delete(id) {
    this.setState({
      id:id[0],
    });
  }

  // 员工详情选中的值
  detail(value) {
    this.setState({
      valueDetail: value,
    });
  }

 // 员工详情弹窗关闭
  closeDetail() {
    this.setState({
      detailShow: false,
    });
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
        detailShow: true,
      });
    } else {
      // 删除
      axios.get(baseUrl + '/staff/delete',{
        params:{
          id:this.state.id
        }
      }).then((res) => {
        message.info(res.data.data);
      }).catch( (err) => {
        console.log(err);
      });
    }
  }

  render() {
   const { addShow,editShow,detailShow } = this.state;
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
         <StaffDetail visible={detailShow} close={this.closeDetail} valueDetail={this.state.valueDetail}/>
         <EditStaff visible={editShow} editCancel={this.editCancel}/>
        <StaffList detail={this.detail} delete={this.delete}/>
      </div>
    );
  }
}
export default Staff;