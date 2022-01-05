import React from 'react';
import ReactDOM from 'react-dom';

// function HelloMessage(props){
//   return <h1>Hello {props.name}</h1>;
// }
class HelloMessage extends React.component{
  render(){
    return(
      <h1>Hello ,{this.props.name}</h1>
    )
  }
}

const element = <HelloMessage name="react props"></HelloMessage>

ReactDOM.render(element, document.getElementById('myProps'))