import React, { Component } from 'react';
import HomeBg from '../../assets/homeBg.jpeg';
import './index.less';
class Login extends Component {
  render() {
    return (
      <div className='login-wrapper'>
        <img src={HomeBg} alt=""/>
        <div className="login">
          <h3>登录</h3>
        </div>
      </div>
    )
  }
}
export default Login;