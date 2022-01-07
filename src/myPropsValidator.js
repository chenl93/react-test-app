import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class MyTitle extends React.Component{
  render(){
    return <h1>Hello, {this.props.title}</h1>
  }
}

MyTitle.propTypes = {
  title: PropTypes.string
}
let title = [1, 3] //"prop types" 属性 title 是必须的且是字符串，非字符串类型会自动转换为字符串 ：
ReactDOM.render(
  <MyTitle title={title}></MyTitle>,
  document.getElementById("myPropsValidator")
)