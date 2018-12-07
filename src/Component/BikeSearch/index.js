import React, { Component } from 'react';
import { Form,Card,Button,Select,DatePicker } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
class BikeSearch extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
  }

  // 重置按钮
  reset() {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card>
        <Form layout='inline'>
          <FormItem label='城市'>
            {
              getFieldDecorator('city')(
                <Select style={{width: 100}}>
                  <Option value='全部'>全部</Option>
                  <Option value='北京'>北京</Option>
                  <Option value='上海'>上海</Option>
                  <Option value='广州'>广州</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label='时间'>
            {
              getFieldDecorator('time')(
                <RangePicker />
              )
            }
          </FormItem>
          <FormItem label='订单状态'>
            {
              getFieldDecorator('state')(
                <Select style={{width: 150}}>
                  <Option value='全部'>全部</Option>
                  <Option value='进行中'>进行中</Option>
                  <Option value='进行中(临时锁车)'>进行中(临时锁车)</Option>
                  <Option value='结束'>结束</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem>
            <Button icon='search' type='primary'>查询</Button>
          </FormItem>
          <FormItem>
            <Button type='primary' onClick={this.reset}>重置</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}
export default Form.create()(BikeSearch);
