import React,{ Component } from 'react';
import './index.less';
import moment from 'moment';
import Helmet from 'react-helmet';
import { Card,Form,Input,Button,Radio,InputNumber,Select,message,Switch,DatePicker,TimePicker,Upload} from 'antd';
const TextArea = Input.TextArea;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
class Reg extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit() {
    const userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields( (err) => {
      if(!err) {
        message.info(`${userInfo.username}注册成功！`);
        this.props.history.push('/admin');
      }
    });
  }
  render() {
    // label和Input排列
    const { getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        md: 4,
      },
      wrapperCol: {
        md: 12
      }
    }
    const optionList = ['打篮球','足球','网球','排球','羽毛球','打游戏','跳舞','唱歌'];
    const children = optionList.map((elem,index) => {
      return (
        <Option key={index} value={elem}>{elem}</Option>
      )
    });
    return (
      <div className='res-wrapper'>
        <Helmet title='注册'/>
        <Card title='欢迎注册,请填写您的信息～～'>
          <Form>
            <FormItem label='用户名' {...formItemLayout}>
              {
                getFieldDecorator('username',{
                  rules:[
                    {
                      required: true,
                      message: '用户名为必填'
                    }
                  ]
                })(
                  <Input placeholder='请输入用户名'/>
                )
              }
            </FormItem>
            <FormItem label='密码' {...formItemLayout}>
              {
                getFieldDecorator('password',{
                  rules:[{
                    required: true,
                    message: '请填写密码'
                  },{
                    max: 8,
                    message: '密码长度不能超过8'
                  }],
                })(
                  <Input placeholder='请输入密码'/>
                )
              }
            </FormItem>
            <FormItem label='性别' {...formItemLayout}>
              {
                getFieldDecorator('sex',{
                  rules:[
                    {
                      required: true,
                      message: '请选择性别',
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='男'>男</Radio>
                    <Radio value='女'>女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label='年龄' {...formItemLayout}>
              {
                getFieldDecorator('age',{
                  rules: [
                    {
                      required: true,
                      message: '请填写年龄'
                    }
                  ]
                })(
                  <InputNumber min={1} />
                )
              }
            </FormItem>
            <FormItem label='当前状态' {...formItemLayout}>
              {
                getFieldDecorator('state',{
                  rules:[
                    {
                      required: true,
                      message:'请选择状态',
                    }
                  ]
                })(
                  <Select>
                    <Option value='前端工程师'>前端工程师</Option>
                    <Option value='Java开发工程师'>Java开发工程师</Option>
                    <Option value='北大才子'>北大才子</Option>
                    <Option value='废材'>废材</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='爱好' {...formItemLayout}>
              {
                getFieldDecorator('hobby',{
                  rules:[{
                    required:true,
                    message: '请选择爱好',
                  }]
                })(
                  <Select
                    mode='multiple'
                    placeholder='请选择爱好'
                  >
                    {children}
                  </Select> 
                )
              }
            </FormItem>
            <FormItem label='是否已婚' {...formItemLayout}>
              {
                getFieldDecorator('married',{
                  valuePropName:'checked',
                  initialValue:true,
                  rules:[
                    {
                      required: true,
                      message: '请选择',
                    }
                  ]
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label='生日' {...formItemLayout}>
              {
                getFieldDecorator('birthday',{
                  initialValue: moment('1997-4-9'),
                  rules:[
                    {
                      required: true,
                      message: '请选择生日'
                    }
                  ]
                })(
                  <DatePicker />
                )
            }
            </FormItem>
            <FormItem label='联系地址' {...formItemLayout}>
              {
                getFieldDecorator('address',{
                  rules: [
                    {
                      required: true,
                      message: '请填写地址'
                    }
                  ]
                })(
                  <TextArea />
                )
              }
            </FormItem>
            <FormItem label='早起时间' {...formItemLayout}>
              {
                getFieldDecorator('time',{})(
                  <TimePicker />
                )
              }
            </FormItem>
            <FormItem label='上传头像' {...formItemLayout}>
              {
                getFieldDecorator('pic',{})(
                  
                )
              }
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.submit}>提交</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(Reg);