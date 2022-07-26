import "./App.css";
import dummy from "./Data/dummyData";
import { useState } from "react";
import Create from "./Pages/Create";
import List from "./Pages/List";
import styled from "styled-components";

function App() {
  const [mode, setMode] = useState(false);
  const [data, setData] = useState(dummy);
  const [nextId, setNextId] = useState(data.length + 1);

  const handleCreate = (e) => {
    setMode(!mode);
  };

  return (
    <div className="App">
      <Header>게시판</Header>
      <List data={data} setData={setData} />
      <Button onClick={handleCreate}>글쓰기</Button>
      {mode ? (
        <Create
          onCreate={(content, title, username) => {
            if (!content || !title || !username) {
              alert("공란 없이 입력해주세요!");
              return;
            }
            const newData = {
              id: nextId,
              content: content,
              title: title,
              username: username,
              createdAt: new Date().toLocaleDateString(),
            };
            setData([newData, ...data]);
            setNextId(nextId + 1);
          }}
        />
      ) : null}
    </div>
  );
}

const Header = styled.header`
  background-color: #495057;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ced4da;
`;

const Button = styled.button`
  cursor: pointer;
  border: solid 1px #f1f3f5;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export default App;
