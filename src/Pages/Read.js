import React from "react";
import "./Read.css";
import { useState } from "react";

function Read({ newData, onUpdate, id, data, setData }) {
  const [mode, setMode] = useState(false);
  // const [id, setId] = useState(newData[0].id);
  const [createdAt, setCreatedAt] = useState(newData[0].createdAt);
  const [title, setTitle] = useState(newData[0].title);
  const [username, setUserName] = useState(newData[0].username);
  const [content, setContent] = useState(newData[0].content);

  const handleSetMode = () => {
    setMode(true);
  };

  const handleDelete = () => {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== id) {
        newData.push(data[i]);
      }
    }
    setData(newData);
    setMode(false);
  };

  return (
    <>
      {!mode ? (
        <div className="readContainer" key={id}>
          <div className="readContent">{content}</div>
          <div className="readDate">
            {new Date(createdAt).toLocaleDateString()}
          </div>
          <div className="buttonGroup">
            <button className="deleteBtn" onClick={handleDelete}>
              삭제하기
            </button>
            <button className="updateBtn" onClick={handleSetMode}>
              수정하기
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const content = event.target.content.value;
            const title = event.target.title.value;
            const username = event.target.username.value;
            onUpdate(content, title, username);
            setMode(false);
          }}
        >
          <textarea
            name="content"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          <input
            className="inputTitle"
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <input
            className="username"
            name="username"
            type="text"
            placeholder="닉네임을 입력하세요"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
          <input className="submitBtn" type="submit"></input>
          <button className="cancelBtn" onClick={handleSetMode}>
            취소
          </button>
        </form>
      )}
      ;
    </>
  );
}

export default Read;
