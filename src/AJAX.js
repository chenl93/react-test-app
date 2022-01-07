import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class UserGist extends React.Component{
  constructor(props){
    super(props);
    this.state = {usrname: '', lastGistUrl: ''}
  }

  componentDidMount(){
    this.serverRequest = axios.get(this.props.source).then(function (result) {
      var lastGist = result.data[0];
      
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
      
    }.bind(this))
    // .bind(this)
  }

  componentWillUnmount(){
    this.serverRequest.abort();
  }

  render(){
    return(
      <div>
        {this.state.username}用户最新的Gist共享地址
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    )
  }
}

ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists"></UserGist>,
  document.getElementById("ajax")
)