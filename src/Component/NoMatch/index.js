import React, { Component } from 'react';
import './index.less';
import NoMatchImg from '../../assets/notFound.jpeg';
class NoMatch extends Component {
  render() {
    return (
      <div className='noMatch-wrapper'> 
        <img src={NoMatchImg} alt=""/>
      </div>
    );
  }
}
export default NoMatch;