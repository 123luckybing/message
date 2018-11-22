import React, { Component } from 'react';
import { Card,Form,Input,Radio,Select,DatePicker,Modal } from 'antd';
import axios from 'axios';
import moment from 'moment';
import baseUrl from '../../Config/BaseUrl';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';
// 编辑员工是在创建员工的基础上把初始值附上去(传id)
class EditStaff extends Component {
  constructor() {
    super();
    this.ok = this.ok.bind(this);
    this.cancel = this.cancel.bind(this);
    this.state = {
      data:{},
    }
  }

  componentDidMount() {
    axios.get(baseUrl + '/staff/edit').then( (res) => {
     this.setState({
       data: res.data.data,
     });
    }).catch( (err) => {
      console.log(err);
    });
  }

  ok() {
    const reviseInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields( (err) => {
      if(!err) {
        console.log(reviseInfo);
      }
    });
  }

  cancel() {
    this.props.editCancel();
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
    const { visible } = this.props;
    const { data } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Modal
          title='编辑员工'
          visible={visible}
          onOk={this.ok}
          onCancel={this.cancel}
        >
          <Card>
          <Form>
            <FormItem {...formLayout} label='姓名'>
              {
                getFieldDecorator('name',{
                  initialValue: data.name,
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
                  initialValue: data.sex,
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
                  initialValue: data.position,
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
                  initialValue: moment(data.birth,dateFormat), //DatePicker设置初始值
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
                  initialValue: data.address,
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
export default Form.create()(EditStaff);