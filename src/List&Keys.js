import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) => 
//   <li>{numbers}</li>
// )

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map(numbers => <li key={numbers.toString()}>{numbers}</li>)
  return (
    <ul>{listItems}</ul>
  )
}

ReactDOM.render(
  // <ul>{listItems}</ul>,
  <NumberList numbers={numbers}></NumberList>,
  document.getElementById("listAndKeys")
)

