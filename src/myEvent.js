import React from 'react';
import ReactDOM from 'react-dom';

function ActionLink(){

  function handleClick(e){
    e.preventDefault();
    console.log(`链接被点击`);
  }

  return(
    <a href="#" onClick={handleClick}>点我</a>
  )
}
/* 
  当你使用 ES6 class 语法来定义一个组件的时候， 事件处理器会成为类的一个方法。 
  例如， 下面的 Toggle 组件渲染一个让用户切换开关状态的按钮：
*/
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true, test: "aaa"};
    
    /* 
    这边绑定是必要的， 这样 `this`才能在回调函数中使用
    类的方法默认是不会绑定 this 的。 如果你忘记绑定 this.handleClick 并把它传入 onClick, 
    当你调用这个函数的时候 this 的值会是 undefined。
    */
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e){
    debugger
    this.setState(prevState => {
      return {
        isToggleOn: !prevState.isToggleOn
      }
    })
  }

  render(){
    return(
      // <button onClick={this.handleClick}>
      <button onClick={this.handleClick.bind(this, this.state.test)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }

}

function App(){
  return(
    <div>
      <ActionLink></ActionLink>
      <br/>
      <Toggle></Toggle>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById("myEvent")
)