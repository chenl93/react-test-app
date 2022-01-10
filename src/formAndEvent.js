import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component{
  render(){
    return <div>
      <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}></input>
      <h4>{this.props.myDataProp}</h4>
    </div>
  }
}

class HelloMessage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      value: 'Hello World',
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    alert('Your favorite flavor is: ' + this.state.value)
    event.preventDefault();
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name; 

    this.setState({[name]: value});
  }

  render(){
    var value = this.state.value;
    return (
      <div>
        {/* <input type="text" value={value} onChange={this.handleChange}></input>
        <h4>{value}</h4> */}
        <Content 
          myDataProp={value} 
          updateStateProp={this.handleChange}>
        </Content>

        <form onSubmit={this.handleSubmit} >
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="gg">Google</option>
              <option value="rn">Runoob</option>
              <option value='tb'>Taobao</option>
              <option value='fb'>Facebook</option>
            </select>
          </label>

          <label>是否离开：
            <input 
              name="isGoing" 
              type="checkbox" 
              checked={this.state.isGoing}
              onChange={this.handleInputChange}>
            </input>
          </label>
          <br/>
          <label>
            访客数：
            <input 
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            ></input>
          </label>

          <input type="submit" value="提交"></input>
        </form>
      </div>
    )
  }
}
ReactDOM.render(
  <HelloMessage></HelloMessage>,
  document.getElementById('formAndEvent')
)