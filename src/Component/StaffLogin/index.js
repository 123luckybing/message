import React, { Component } from 'react';
import { Form,Button,Input,Card } from 'antd';
const FormItem = Form.Item;
class StaffLogin extends Component {
  render() {
    return (
      <div>
        <Card>
          <Form layout='inline'>
            <FormItem label='用户名'>
              {/* {
                getFieldDecorator()(

                )
              } */}
              <Input />
            </FormItem>
            <FormItem label='用户id'>
              <Input />
            </FormItem >
            <Button icon='search'>查询</Button>
            <Button>重置</Button>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(StaffLogin);