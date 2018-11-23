import React, { Component } from 'react';
import { Modal,Form,Input,Select,message } from 'antd';
import axios from 'axios';
import baseUrl from '../../Config/BaseUrl';
const FormItem = Form.Item;
const Option = Select.Option;
class NewPower extends Component {
  constructor() {
    super();
    this.newCancel = this.newCancel.bind(this);
    this.newOk = this.newOk.bind(this);
  }

  newOk() {
    const newInfo = this.props.form.getFieldsValue();
    axios.get(baseUrl + '/power/new',{
      params: {
        newInfo:newInfo
      }
    }).then( (res) => {
      message.info(res.data.result);
      this.props.cancel();
    }).catch( (err) => {
      console.log(err);
    });
  }

  // 设置权限关闭弹窗
  newCancel() {
    this.props.cancel();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible } = this.props;
    const layoutItem = {
      labelCol: {
        md: 4,
      },
      wrapperCol:{
        md:13,
      }
    }
    return (
      <div>
        <Modal
          title='创建角色'
          visible={visible}
          onCancel={this.newCancel}
          onOk = {this.newOk}
        >
          <Form>
            <FormItem {...layoutItem} label='角色名称'>
              {
                getFieldDecorator('name',{
                  rules:[{
                    required: true,
                    message: '请填写角色名称'
                  }]
                })(
                  <Input />
                )
              }
            </FormItem>
            <FormItem {...layoutItem} label='状态'>
              {
                getFieldDecorator('status',{
                  rules:[{
                    required:true,
                    message:'请选择状态'
                  }]
                })(
                  <Select>
                    <Option value='管理员'>管理员</Option>
                    <Option value='客服人员'>客服人员</Option>
                    <Option value='财务员'>财务员</Option>
                  </Select>
                )
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(NewPower);