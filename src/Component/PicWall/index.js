import React, { Component } from 'react';
import { Card,Modal } from 'antd';
import list from './data';
const { Meta } = Card;
class PicWall extends Component {
  constructor() {
    super();
    this.BigPic = this.BigPic.bind(this);
  }

  BigPic(picIndex) {
    Modal.success({
      content: 
      <img 
        style={{ width: '240px'}}
        src={require(`./img/${picIndex}.jpeg`)}
      />
    });
  }

  render() {
    let listData = list.map( (elem,index) => {
      return (
        <Card
          style={{ width :'240px',display: 'inline-block'}}
          cover={
            <img 
              src={require(`./img/${index + 1}.jpeg`)}
              onClick={() => this.BigPic( index+ 1 )}
            />
          } // 封面图
        >
          <Meta 
            title ={elem.title}
            description={elem.description}
          />
        </Card>
      );
    });
    return (
      <div>
        {listData}
        <h3>点击图片查看大图</h3>
      </div>
    );
  }
}
export default PicWall;