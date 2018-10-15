import React, { Component } from 'react';
import { Card, Button, Icon, Radio} from 'antd';
import './index.less';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
class ButtonCom extends Component {
  constructor(){
    super();
    this.state = {
      loading: true,
      size: 'default',
    }
    this.closeLoading = this.closeLoading.bind(this);
    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(e) {
    this.setState({
      size: e.target.value,
    });
  }

  closeLoading() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading,size } = this.state;
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">primary</Button>
          <Button>btn</Button>
          <Button type='dashed'>dashed</Button>
          <Button type='danger'>danger</Button>
          <Button disabled>disabled</Button>
        </Card>
        <Card title='图形按钮'>
          <Button icon='plus'>创建</Button>
          <Button icon='edit' type='primary'>编辑</Button>
          <Button icon='search'>搜索</Button>
          <Button icon='download'>下载</Button>
          <Button icon='delete'>删除</Button>
          <Button shape='circle'>
            <Icon type='qq'/>
          </Button>
        </Card>
        <Card title='Loading按钮'>
          <Button
            type='priamry'
            loading={loading} // loading=true/false
          >
            确定
          </Button>
          <Button loading={loading}>点击加载</Button>
          <Button type='primary' shape='circle' loading={loading}></Button>
          <Button 
            type='primary'
            onClick={this.closeLoading}
            >关闭</Button>
        </Card>
        <Card title='按钮组'>
          <ButtonGroup>
            <Button icon='left' type='primary'>返回</Button>
            <Button icon='right' type='primary'>前进</Button>
          </ButtonGroup>
        </Card>
        <Card title='按钮尺寸'>
          <RadioGroup onChange={this.radioChange}>
            <Radio value='small'>小</Radio>
            {/* 默认中型尺寸default */}
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </RadioGroup>
          <Button size={size}>确定</Button>
        </Card>
      </div>
    );
  }
}
export default ButtonCom;