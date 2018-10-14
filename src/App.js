import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import NavLeft from './Component/NavLeft';
import { Row,Col } from 'antd';
import './App.less';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={4}>
            <NavLeft />
          </Col>
          <Col span={20}>
            <Header />
            <Row>
              <div className="content"> Content</div>
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
