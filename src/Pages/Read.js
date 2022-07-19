import React from "react";
import "./Read.css";
import { useState } from "react";

function Read({ newData }) {
  const [mode, setMode] = useState(false);

  return (
    <>
      {newData.map((el, idx) => {
        return (
          <div className="readContainer" key={el.id}>
            <div className="readContent">{el.content}</div>
            <div className="readDate">
              {new Date(el.createdAt).toLocaleDateString()}
            </div>
            <div className="buttonGroup">
              <button className="deleteBtn">삭제하기</button>
              <button className="updateBtn">수정하기</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Read;
