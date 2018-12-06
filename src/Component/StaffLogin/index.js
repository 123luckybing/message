import React, { Component } from 'react';
import { Form,Button,Input,Card } from 'antd';
const FormItem = Form.Item;
class StaffLogin extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
  }

  // 重置
  reset() {
    this.props.form.resetFields();
  }

  render() {
    return (
      <div>
        <Card>
          <Form layout='inline'>
            <FormItem label='用户名'>
              <Input />
            </FormItem>
            <FormItem label='用户id'>
              <Input />
            </FormItem >
            <FormItem>
              <Button icon='search' type='primary'>查询</Button>
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.reset}>重置</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(StaffLogin);