import React, { Component } from 'react';
import { Modal,Form,Button,Select } from 'antd';
import { TreeSelect } from 'antd';
import axios from 'axios';
import baseUrl from '../../Config/BaseUrl';
const FormItem = Form.Item;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const Option = Select.Option;
class SetPower extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      value:[],
    }
    this.setCancel = this.setCancel.bind(this);
    this.treeSelectChange = this.treeSelectChange.bind(this);
  }


  treeSelectChange(value) {
    this.setState({
      value: value,
    });
  }

  // 设置权限关闭弹窗
  setCancel() {
    this.props.cancel();
  }

  componentDidMount() {
    axios.get(baseUrl + '/power/set').then( (res) => {
      this.setState({
        name: res.data.result.name,
      });
    }).catch( (err) => {
      console.log(err);
    });
  }

  render() {
    const { visible } = this.props;
    const { name } = this.state;
    const { treeData } = this.props;
    const layoutForm = {
      labelCol: {
        md: 4,
      },
      wrapperCol: {
        md: 10,
      }
    }
    const tProps = {
      treeData,
      value: this.state.value,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please Select',
      onChange: this.treeSelectChange, 
      treeCheckable: true, 
      style : {
        wisth: 300,
      }
    }

    return (
      <div>
        <Modal
          title='设置权限'
          visible={visible}
          onCancel={this.setCancel}
        >
          <Form>
            <FormItem label='角色名称' {...layoutForm}>
              {/* 仅仅起展示作用 */}
              <Button disabled>{name}</Button>
            </FormItem>
            <FormItem label='状态' {...layoutForm}>
              <Select>
                <Option value='启用'>启用</Option>
                <Option value='关闭'>关闭</Option>
              </Select>
            </FormItem>
            <FormItem>
              <TreeSelect {...tProps} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default SetPower;