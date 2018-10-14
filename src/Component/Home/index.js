import React, { Component } from 'react';
import hi from '../../assets/hi.jpeg';
import './index.less';

class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>
        <img src={hi} alt=""/>
        <div>欢迎来到共享单车后台管理系统</div>
      </div>
    );
  }
}
export default Home;