import React from 'react';
import ReactDOM from 'react-dom';

function Mailbox(props){
  const unreadMessages = props.unreadMessages;
  return(
    <div>
      <h1>Hello!</h1>
      {/* 与运算符 && */ }
      {
        unreadMessages.length > 0 && 
        <h2>
          您有{unreadMessages.length}条未读信息
        </h2>
      }
    </div>
  )
}

const messages = ['React', 'Re: React']

function UserGreeting(props){
  return <h1>欢迎回来！</h1>
}

function GuestGreeting(props){
  return <h1>请先注册！</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  /* 三目运算符 */
  return(
    <div>
      {isLoggedIn ? (<UserGreeting></UserGreeting>) : <GuestGreeting></GuestGreeting>}
    </div>
  )
  /* if(isLoggedIn) {
    return <UserGreeting></UserGreeting>
  }
  return <GuestGreeting></GuestGreeting> */
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLogin: false}
  }

  handleLoginClick(){
    this.setState({isLogin: true});
  }

  handleLogoutClick(){
    this.setState({isLogin: false})
  }

  render(){
    const isLogin = this.state.isLogin;
    let button = null;
    if(isLogin){
      button = <LogoutButton  onClick={this.handleLogoutClick}></LogoutButton>
    }else{
      button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
    }

    return (
      <div>
        <Greeting  isLoggedIn={isLogin}></Greeting>
        {button}
        < Mailbox unreadMessages={messages}></Mailbox>
      </div>
    )
  }
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>登录</button>
  )
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>退出</button>
  )
}


ReactDOM.render(
  <LoginControl></LoginControl>,
  document.getElementById("conditionRendering")
)