import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  handleClick(){
    this.refs.myInput.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref="myInput"></input>
        <input type="button" value="点我获取输入框焦点"
          onClick={this.handleClick.bind(this)}
        ></input>
      </div>
    )
  }
}
ReactDOM.render(
  <MyComponent></MyComponent>,
  document.getElementById("refs")
)