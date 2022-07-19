import React from "react";
import "./List.css";
import Read from "./Read";
import { useState } from "react";

function List({ data }) {
  const [mode, setMode] = useState(false);
  const [newData, setNewData] = useState(data);

  const handleRead = (e) => {
    setMode(true);
    setNewData(
      data.filter((el) => {
        return el.id === e.target.value;
      })
    );
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
      {mode ? <Read newData={newData} /> : null}
    </div>
  );
}

export default List;
