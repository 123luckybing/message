import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import NavLeft from '../NavLeft';
import './index.less';
import { Row,Col } from 'antd';
class Admin extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={4}>
            <NavLeft />
          </Col>
          <Col span={20} className='right'>
            <Header />
            <Row>
              <div className="content">
                {/* 子路由对应的组件 App.js中找 */}
                {this.props.children}
              </div>
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;
