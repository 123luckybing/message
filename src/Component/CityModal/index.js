import React,{ Component } from 'react';
import { Modal,Form,Select,Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
class CityModal extends Component {
  constructor() {
    super();
    this.cancel = this.cancel.bind(this);
    this.ok =this.ok.bind(this);
  }
  // 点击取消按钮
  cancel() {
    this.props.Cancel();
  }

  ok(){
    // const cityInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields( (err,value) => {
      if(!err) {
        alert('yes');
      }
    });
  }

  render() {
    const { visible } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formLayout = {
      labelCol:{
        md: 4,
      },
      wrapperCol:{
        md: 16,
      }
    }
    return (
      <div>
        <Modal 
          title='开通城市'
          visible={visible}
          onOk={this.ok}
          onCancel={this.cancel}
        >
          <Form>
            <FormItem label='选择城市' {...formLayout}>
            {
              getFieldDecorator('city',{
                rules:[{
                  required: true,
                  message:'请选择城市'
                }]
              })(
                <Select>
                  <Option value='全部'>全部</Option>
                  <Option value='天津'>天津</Option>
                  <Option value='北京'>北京</Option>
                </Select>
              )
            }
            </FormItem>
            <FormItem label='营运模式' {...formLayout}>
              {
                getFieldDecorator('companyMode',{
                  rules:[
                    {
                      required: true,
                      message:'请选择营运模式'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='自营'>自营</Radio>
                    <Radio value='加盟'>加盟</Radio>
                </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label='用车模式' {...formLayout}>
              {
                getFieldDecorator('carMode',{
                  rules:[
                    {
                      required: true,
                      message: '请选择用车模式'
                    }
                  ]
                })(
                  <RadioGroup>
                    <Radio value='制定停车点模式'>制定停车点模式</Radio>
                    <Radio value='禁停区模式'>禁停区模式</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(CityModal);