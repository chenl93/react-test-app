import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import myComponent from './myComponent'
// import helloworld from './helloworld'
// import myState from './myState'
// import myProps from './myProps'
// import myPropsValidator from './myPropsValidator'
// import myEvent from './myEvent'
// import conditionRendering from './conditionRendering'
// import listAndKeys from './List&Keys'
// import componentLifeCycle from './componentLifeCycle'
// import ajax from './AJAX'
// import formAndEvent from './formAndEvent'
import refs from './refs'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function Hello(props){
//   return <h1>Hello World!</h1>
// }
/* 
ReactDOM.render(...) 是渲染方法， 所有的 js, html 都可通过它进行渲染绘制，
 他有两个参数， 内容和渲染目标 js 对象。

 内容就是要在渲染目标中显示的东西， 可以是一个 React 部件， 
 也可以是一段HTML或TEXT文本。 渲染目标JS对象， 
 就是一个DIV或TABEL, 或TD 等HTML的节点对象。
 */
// ReactDOM.render(<Hello />, document.getElementById("root"))

// function tick(){
//   const element = (
//     <div>
//       <h1>hello world</h1>
//       <h2>现在是：{new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById("root"));
// }

// function Clock(props) {
//   return (
//     <div>
//       <h1> hello world </h1>
//       <h2> 现在是： {props.date.toLocaleTimeString()} </h2>
//     </div>
//   )
// }

/* 
创建一个 React.Component 的 ES6 类
该类封装了要展示的元素， 需要注意的是在 render() 方法中， 需要使用 this.props 替换 props
*/ 
// var myStyle = {
//   fontSize: 50,
//   color: '#ff0000'
// }
// var arr = [
//   <h1>arr1</h1>,
//   <h2>arr2</h2>
// ]
// class Clock extends React.Component{
//   render(){
//     return (
//       <div>
//         {/* 注释。。 */}
//         <h1 style={myStyle}> hello world </h1>
//         <h2> 现在是： {this.props.date.toLocaleTimeString()} </h2>
//         <p data-myattribute="somevalue">自定义属性</p>
//         <div>{arr}</div>
//       </div>
//     )
//   }
// }

// function tick(){
//   ReactDOM.render( < Clock date = { new Date() }/>, document.getElementById("root"))
// }

// setInterval(() => {
//   tick()
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
