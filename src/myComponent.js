import ReactDOM from 'react-dom'

function Name(props){
  return <h1>网站名称:{props.name}</h1>
}

function Url(props){
  return <h1>网站地址:{props.url}</h1>
}

function NickName(props){
  return <h1>网站小名:{props.nickname}</h1>
}
function App(){
  return (
    <div>
      <Name name="菜鸟"></Name>
      <Url url="http://www.runoob.cob"></Url>
      <NickName nickname="Runoob"></NickName>
    </div>
  )
}
ReactDOM.render(
  <App></App>,
  document.getElementById('myComponent')
)