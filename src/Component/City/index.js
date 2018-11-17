import React,{ Component } from 'react';
import { Card,Table,Button,message,Spin } from 'antd';
import axios from 'axios';
import BaseUrl from '../../Config/BaseUrl';
import columns from './column';
import CityModal from '../CityModal';
import CitySearch from '../CitySearch';
class City extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      list:[],
      spinning: true,
    }
    this.modalShow = this.modalShow.bind(this);
    this.cancel = this.cancel.bind(this);
    this.freshenList = this.freshenList.bind(this);
  }
 
  // 刷新列表(重新请求数据)
  freshenList() {
    axios.get(BaseUrl + '/city/list').then((res) => {
      this.setState({
        list: res.data.result,
        spinning:false,
      });
    }).catch((err)=>{
      message.warn(err);
    });
  }

  // 调接口
  componentWillMount() {
    this.freshenList();
  }

  // 开通城市Modal展示
  modalShow() {
    this.setState({
      visible: true,
    });
  }

  cancel() {
    this.setState({
      visible: false,
    });
  }

  render () {
    const { visible,list,spinning } = this.state;
    return (
      <div>
        <CitySearch />
        <Card
          title={
          <Button
            onClick={this.modalShow}
            type='primary'
            >开通城市
          </Button>
          }
        >
        <Spin spinning={spinning}>
          <Table
            bordered
            columns={columns}
            dataSource = {list}
          />
        </Spin>
        </Card>
        {/* 开通城市模态框 */}
        <CityModal
          visible={visible} 
          Cancel={this.cancel}
          freshenList = {this.freshenList}
        />
      </div>
    )
  }
}
export default City;