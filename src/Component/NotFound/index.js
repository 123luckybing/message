import React, { Component } from 'react';
import NotFoundPic from '../../assets/notFound.jpeg';
class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={NotFoundPic} alt=""/>
      </div>
    )
  }
}
export default NotFound;