import React, { Component } from 'react';
import { Carousel,Card } from 'antd';
import './index.less';

class CarouselCom extends Component {
  render() {
    return (
      <div>
        <Card title='文字轮播'>
          <Carousel effect="fade" autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel> 
        </Card>
        <Card title='图片轮播'>
        <Carousel effect="fade" autoplay className='pic-slider'>
            <div><img src={ require('../PicWall/img/1.jpeg')} alt=""/></div>
            <div><img src={ require('../PicWall/img/2.jpeg')} alt=""/></div>
            <div><img src={ require('../PicWall/img/3.jpeg')} alt=""/></div>
            <div><img src={ require('../PicWall/img/4.jpeg')} alt=""/></div>
          </Carousel> 
        </Card>
      </div>
    );
  }
}

export default CarouselCom;