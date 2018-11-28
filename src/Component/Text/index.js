import React, { Component } from 'react';
import { Card,Button,Modal } from 'antd';
import draftToHtml from 'draftjs-to-html'; // 把文本转化成html文件
import { Editor } from 'react-draft-wysiwyg'; // 导入编辑器
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // 导入样式
class Text extends Component {
  constructor() {
    super();
    this.state = {
      editorState:'',
      showRichText: false,
      content:'',
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.clearText = this.clearText.bind(this);
    this.getHTML = this.getHTML.bind(this);
    this.cancel = this.cancel.bind(this);
    this.contentChange = this.contentChange.bind(this);
  }

  contentChange(content) {
    this.setState({
      content,
    });
  }

  // modal点击cancel
  cancel() {
    this.setState({
      showRichText: false,
    });
  }

  // 清空内容，把editorState 编辑状态变成空即可
  clearText() {
    this.setState({
      editorState: '',
    });
  }

  // 获取html文档，弹出弹框
  getHTML() {
    this.setState({
      showRichText: true,
    });
  }
  
  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    });
  }

  render() {
    const { editorState,showRichText,content } = this.state;
    return (
      <div>
        <Card>
          <Button type='primary' onClick={this.clearText}>清空内容</Button>
          <Button type='primary' onClick={this.getHTML}>获取HTML文档</Button>
        </Card>
        <Card title='富文本编辑器'>
        <Editor
          editorState={editorState} // 编辑状态
          onContentStateChange = { this.contentChange } // 输入内容发生变化时
          onEditorStateChange={this.onEditorStateChange} 
        />
        </Card>
        <Modal
          title='html文件如下'
          visible={showRichText}
          onOk = {this.ok}
          onCancel={this.cancel}
          footer={null} // ok cancel按钮取消
        >
          {/* draftToHtml 函数把括号里的参数准化成html文件 */}
          { draftToHtml(content) } 
        </Modal>
      </div>
    );
  }
}
export default Text;