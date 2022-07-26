import React from "react";
import "./List.css";
import Read from "./Read";
import { useState } from "react";

function List({ data, setData }) {
  const [mode, setMode] = useState(false);
  const [newData, setNewData] = useState(data);
  const [id, setId] = useState(newData[0].id);

  const handleRead = (e) => {
    setMode(!mode);
    setNewData(
      data.filter((el) => {
        return el.id === e.target.value;
      })
    );
    setId(e.target.value);
  };

  return (
    <div className="container">
      <section>
        {data.map((el) => {
          return (
            <ul key={el.id}>
              <li>{el.id}</li>
              <li onClick={handleRead} value={el.id} className="title">
                {el.title}
              </li>
              <li>{el.username}</li>
            </ul>
          );
        })}
      </section>
      {mode ? (
        <Read
          data={data}
          setData={setData}
          id={id}
          newData={newData}
          setNewData={setNewData}
          onUpdate={(content, title, username) => {
            if (!content || !title || !username) {
              alert("공란 없이 입력해주세요!");
              return;
            }
            const newTopics = [...data];
            const upDatedData = {
              id: id,
              content: content,
              title: title,
              username: username,
              createdAt: new Date().toLocaleDateString(),
            };
            for (let i = 0; i < newTopics.length; i++) {
              if (newTopics[i].id === id) {
                newTopics[i] = upDatedData;
                break;
              }
            }
            setData(newTopics);
          }}
        />
      ) : null}
    </div>
  );
}

export default List;
