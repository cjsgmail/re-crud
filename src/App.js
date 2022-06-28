import './App.css';
import dummy from './Data/dummyData';
import { useState } from 'react';


function App() {
  
  const [mode, setMode] = useState(false)
  const [data, setData] = useState(dummy)
  const [nextId, setNextId] = useState(data.length + 1)

  const handleCreate = (e) => {
    setMode(!mode)
  }

  
  return (
    <div className="App">
      <Header title="CRUD프로젝트"/>
      <Nav props={data} mode={mode} handleCreate={handleCreate}/>
      <button onClick={handleCreate}>글쓰기</button>
      <button>글삭제</button>
      {mode ? <Create onCreate={(content, title, username)=>{
        const newData = {
          id:nextId, 
          content:content,
          title:title,
          username:username,
          date: new Date()
        }
        setData([newData, ...data])
        setNextId(nextId + 1)
      }}/> : null}
    </div>
  );
}

function Header(props) {
  return <header>
  <h1>{props.title}</h1>
</header>
}

function Nav({props}) {
  

  return <nav>
    {props.map((el)=>{
      return <ul key={el.id}>
          <li>{el.id}</li> 
          <li>{el.title}</li>
          <li>{el.username}</li>
        </ul>
    })}
</nav>
}

function Create(props){
  return <form onSubmit={event=>{
    event.preventDefault();
    const content = event.target.content.value
    const title = event.target.title.value
    const username = event.target.username.value
    props.onCreate(content,title,username);
  }}>
    <p><textarea name="content" placeholder="내용을 입력하세요"></textarea></p>
    <p><input name='title' type="text" placeholder="제목을 입력하세요"></input></p>
    <p><input name='username' type="text" placeholder="닉네임을 입력하세요"></input></p>
    <p><input type="submit"></input></p>
  </form>
}

export default App;
