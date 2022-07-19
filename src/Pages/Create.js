import React from "react";
import "./Create.css";

function Create(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const content = event.target.content.value;
        const title = event.target.title.value;
        const username = event.target.username.value;
        props.onCreate(content, title, username);
      }}
    >
      <textarea name="content" placeholder="내용을 입력하세요"></textarea>
      <input
        className="inputTitle"
        name="title"
        type="text"
        placeholder="제목을 입력하세요"
      ></input>
      <input
        className="username"
        name="username"
        type="text"
        placeholder="닉네임을 입력하세요"
      ></input>
      <input className="submitBtn" type="submit"></input>
    </form>
  );
}

export default Create;
