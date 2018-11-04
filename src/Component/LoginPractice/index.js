import React,{ Component } from 'react';
import { Card,Form,Input,Button,message } from 'antd';
const FormItem = Form.Item;
class LoginPractice extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit() {
    const userInfo = this.props.form.getFieldsValue(); // 获取表单的所有填写值
    this.props.form.validateFields((err,values) => {
      if(!err) { // 如果全部通过
        console.log(values); // 打印表单信息
        message.success(`${userInfo.username} 恭喜您登陆成功`);
      }
    }); // 字段校验
  }

  render() {
    const { getFieldDecorator } = this.props.form; // 获取输入的内容
    return (
      <div>
        <Card title='行内表单'>
          {/* layout排列方式 */}
          <Form layout='inline'> 
            <FormItem>
              <Input placeholder='请输入用户名'/>
            </FormItem>
            <FormItem>
              <Input placeholder='请输入密码'/>
            </FormItem>
            <FormItem>
              <Button type='warning'>登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title='水平表单'>
          <Form style={{ width:'300px'}}> 
          {/* 
            getFieldDecorator('名字',{
              初始值，规则
            })(这个规则对哪个起作用) 
          */}
            <FormItem>
              {
                getFieldDecorator('username',{
                  rules:[
                    { 
                      required: true,
                      message:'请输入用户名'
                    },{
                      min: 5,
                      max:10,
                      message:'长度不在范围内'
                    }
                  ], // 必填项
                })(<Input placeholder='请输入用户名'/>)
              }
              {/* userInfo.username来获取 */}
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password',{
                  rules: [{ required: true, message:'请输入密码'}],
                }
                )(<Input placeholder='请输入密码'/>)
              }
              {/* userInfo.password来获取 */}
            </FormItem>
            <FormItem>
              <Button type='warning' onClick={this.submit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(LoginPractice);
// export default Form.create()(LoginPractice);
// 必须把 LoginPractice（组件）通过Form.create 导出来,被加工一下
// 否则getFieldDecorator不能用 