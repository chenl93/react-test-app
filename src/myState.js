import React from 'react';
import ReactDOM from 'react-dom';

function FormattedDate(props){
  return <h2>现在是 {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }
  
  // 生命周期: 在组件输出到DOM后会执行
  componentDidMount(){
    this.timerID = setInterval(() => {
      this.tick()
    }, 100);
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date:new Date()
    })
  }

  render(){
    return (
      <div>
        <h1>React State</h1>
        <FormattedDate date={this.state.date}></FormattedDate>
      </div>
    )
  }
}

function App(){
  return (
    <div>
      {/* 
      - React调用Clock组件的构造函数constructor,初始化state.date值 
      - 每个Clock组件都建立了自己的定时器并且独立更新

      */ }
      <Clock></Clock> 
      <Clock></Clock>
      <Clock></Clock>
    </div>
  )
}

// ReactDOM.render调用Clock组件的render()方法
ReactDOM.render(
  <App></App>, 
  document.getElementById("myState")
)