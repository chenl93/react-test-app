import React from 'react';
import ReactDOM from 'react-dom';

// function HelloMessage(props){
//   return <h1>Hello {props.name}</h1>;
// }
// class HelloMessage extends React.Component{
//   render(){
//     return(
//       <h1>Hello ,{this.props.name}</h1>
//     )
//   }
// }

// HelloMessage.defaultProps = {
//   name: "Runoob"
// }

// const element = <HelloMessage name="react props"></HelloMessage>

// ReactDOM.render(element, document.getElementById('myProps'))

class WebSite extends React.Component {
  constructor(){
    super(); 
    this.state = {
      name: '菜鸟教程',
      site: 'https://www.runoob.com'
    }
  }

  render(){
    return(
      <div>
        <Name name={this.state.name}></Name>
        <Link site={this.state.site}></Link>
      </div>
    )
  }
}

class Name extends React.Component {
  render(){
    return (<h1>{this.props.name}</h1>)
  }
}
class Link extends React.Component {
  render(){
    return (
      <a href={this.props.site}>
      {this.props.site}
      </a>
    )
  }
}

ReactDOM.render(<WebSite></WebSite>, document.getElementById('myProps'))