import React, { Component } from 'react';
import { Card,Form,Button,Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class CitySearch extends Component {
  constructor(){
    super();
    this.search = this.search.bind(this);
    this.reset = this.reset.bind(this);
  }

  // 查询按钮
  search() {

  }

  // 重置按钮
  reset() {

  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
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
            <FormItem label='用车模式'>
              {
                getFieldDecorator('userMode')(
                  <Select style={{width: '130px'}}>
                    <Option value='全部'>全部</Option>
                    <Option value='制定停车点模式'>制定停车点模式</Option>
                    <Option value='禁停区模式'>禁停区模式</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='营运模式'>
              {
                getFieldDecorator('companyMode')(
                  <Select style={{width: '100px'}}>
                    <Option value='全部'>全部</Option>
                    <Option value='自营'>自营</Option>
                    <Option value='加盟'>加盟</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='加盟商授权状态'>
              {
                getFieldDecorator('powerMode')(
                  <Select style={{width: '100px'}}>
                    <Option value='全部'>全部</Option>
                    <Option value='为授权'>未授权</Option>
                    <Option value='已授权'>已授权</Option>
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
      </div>
    );
  }
}
export default Form.create()(CitySearch);