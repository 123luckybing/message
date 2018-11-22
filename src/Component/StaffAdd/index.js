import React, { Component } from 'react';
import axios from 'axios';
import baseUrl from '../../Config/BaseUrl';
import { Card,Form,Input,Radio,Select,DatePicker,Modal,message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
class StaffAdd extends Component {
  constructor() {
    super();
    this.ok = this.ok.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  ok() {
    const staffInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err) => {
      if(!err) {
        axios.get(baseUrl + '/staff/new',{
          params:{
            staffInfo:staffInfo
          }
        }).then( (res) => {
          message.info(res.data.data);
          this.props.cancelAdd();
          this.props.form.resetFields(); // 清空表单数据
        }).catch((err) => {
          console.log(err);
        });
      }
    });
  }

  cancel() {
    this.props.cancelAdd();
  }

  render() {
    const formLayout = {
      labelCol: {
        md: 4
      },
      wrapperCol:{
        md: 16,
      }
    }
    const { getFieldDecorator } = this.props.form;
    const { visible } = this.props;
    return (
      <div>
        <Modal
          title='添加员工'
          visible={visible}
          onOk={this.ok}
          onCancel={this.cancel}
        >
        <Card>
          <Form>
            <FormItem {...formLayout} label='姓名'>
              {
                getFieldDecorator('name',{
                  rules:[{
                    required: true,
                    message: '请填写姓名'
                  }] 
                })(
                  <Input type='text' />
                )
              }
            </FormItem>
            <FormItem {...formLayout} label='性别'>
              {
                getFieldDecorator('sex',{
                  rules:[{
                    required: true,
                    message: '请选择性别'
                  }]
                })(
                  <RadioGroup>
                    <Radio value='男'>男</Radio>
                    <Radio value='女'>女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem {...formLayout} label='职位'>
              {
                getFieldDecorator('position',{
                  rules:[{
                    required:true,
                    message: '请选择性别'
                  }]
                })(
                  <Select>
                    <Option value='前端'>前端</Option>
                    <Option value='测试'>测试</Option>
                    <Option value='PHP'>PHP</Option>
                    <Option value='Java'>Java</Option>
                    <Option value='ios'>ios</Option>
                    <Option value='Android'>Android</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem {...formLayout} label='生日'>
              {
                getFieldDecorator('birthday',{
                  rules:[{
                    required: true,
                    message: '请填写生日'
                  }]
                })(
                  <DatePicker />
                )
              }
            </FormItem>
            <FormItem {...formLayout} label='联系地址'>
              {
                getFieldDecorator('address',{
                  rules:[{
                    required: true,
                    message: '请填写联系地址'
                  }]
                })(
                  <TextArea />
                )
              }
            </FormItem>
          </Form>
        </Card>
      </Modal>
      </div>
    )
  }
}
export default Form.create()(StaffAdd);