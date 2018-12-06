import React, { Component } from 'react';
import { Modal,Form } from 'antd';
const FormItem = Form.Item;
class StaffDetail extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  // 关闭员工详情弹窗
  close() {
    this.props.close();
  }

  render() {
    const { valueDetail } = this.props;
    console.log( this.props.valueDetail);
    const { visible } = this.props;
    const layoutFormItem  = {
      labelCol: {
        md: 4
      },
      wrapperCol: {
        md: 10
      }
    }
    return (
      <div>
        <Modal
          title='员工详情'
          visible={visible}
          footer={null}
          onCancel={this.close}
        >
        {
          valueDetail[0] ? (
            <Form>
            <FormItem label='姓名' {...layoutFormItem}>
               { valueDetail[0].name}
            </FormItem>
             <FormItem label='性别' {...layoutFormItem}>
             { valueDetail[0].sex}
            </FormItem> 
            <FormItem label='生日' {...layoutFormItem}>
              {valueDetail[0].birth}
            </FormItem>
            <FormItem label='婚姻状态' {...layoutFormItem}>
              {valueDetail[0].state}
            </FormItem>
            <FormItem label='早起时间' {...layoutFormItem}>
              {valueDetail[0].time}
            </FormItem>
            <FormItem label='年龄' {...layoutFormItem}>
              {valueDetail[0].age}
            </FormItem>
            <FormItem label='联系地址' {...layoutFormItem}>
              {valueDetail[0].address }
            </FormItem>
            <FormItem label='爱好' {...layoutFormItem}>
              {valueDetail[0].hobby.map( (elem,index) => {
                return <li key={index}>{elem}</li>
              }) }
            </FormItem>
          </Form>
          ) : null
        }
        </Modal>
      </div>
    )
  }
}
export default StaffDetail;