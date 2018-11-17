import React,{ Component } from 'react'; 
import { Card,Form,Select,Button,DatePicker } from 'antd';
const FormItem = Form.Item; 
const { RangePicker } = DatePicker;
const Option = Select.Option;
class OrderSearch extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card>
          <Form layout='inline'>
            <FormItem label='城市'>
            {
              getFieldDecorator('city')(
                <Select style={{width: '100px'}}>
                  <Option value='全部'>全部</Option>
                  <Option value='北京市'>北京市</Option>
                  <Option value='天津市'>天津市</Option>
                  <Option value='深圳市'>深圳市</Option>
                </Select>
              )
            }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('time')(
                  <RangePicker />
                )
              }
            </FormItem>
            <FormItem label='订单状态'>
              {
                getFieldDecorator('orderStatus')(
                  <Select style={{width: '150px'}}>
                    <Option value='全部'>全部</Option>
                    <Option value='进行中'>进行中</Option>
                    <Option value='进行中（临时锁车）'>进行中（临时锁车）</Option>
                    <Option value='行程结束'>行程结束</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.search}>查询</Button>
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.reset}>重置</Button>
            </FormItem>
          </Form>
        </Card>
    );
  }
}
export default Form.create()(OrderSearch);