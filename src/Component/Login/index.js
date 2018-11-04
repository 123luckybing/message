import React, { Component } from 'react';
import { Card,Form,Input,Icon,Button,message } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';
const FormItem = Form.Item;
class Login extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit() {
    const userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields( (err,value) => {
      if(!err) {
        message.success(
          `${userInfo.username} 登陆成功!`
        );
        this.props.history.push('/admin'); // 登陆成功后this.props.history.push();
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-wrapper'>
        <div className="login">
          <Card title='登录'>
            <Form>
              <FormItem>
                {
                  getFieldDecorator('username',{
                    rules:[{
                      required: true,
                      message: '用户名不能为空'
                    }],
                  })(
                    <Input prefix={<Icon type="user" theme="outlined" />} placeholder='请输入用户名'/>
                  )
                }
              </FormItem>
              <FormItem>
                  {
                    getFieldDecorator('password',{
                      rules:[{
                        required: true,
                        message: '密码不能为空'
                      }],
                    })(
                      <Input prefix={<Icon type="lock" theme="filled" />} placeholder='请输入密码'/>
                    )
                  }
              </FormItem>
              <FormItem>
                <Button type='primary' onClick={this.submit}>登录</Button>
              </FormItem>
              <FormItem>
                <Button>
                  <Link to='/Register'>没账号  去注册</Link>
                </Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login);