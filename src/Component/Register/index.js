import React,{ Component } from 'react';
import './index.less';
import { Card,Form,Input,Button} from 'antd';
const FormItem = Form.Item;
class Reg extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit() {
    this.props.history.push('/admin');
  }
  render() {
    return (
      <div className='res-wrapper'>
        <Card title='欢迎注册,请填写您的信息～～'>
          <Form>
            <FormItem label='用户名'>
              <Input placeholder='请输入用户名'/>
            </FormItem>
            <FormItem label='密码'>
              <Input placeholder='请输入密码'/>
            </FormItem>
            <FormItem>

            </FormItem>
            <FormItem>

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
export default Reg;