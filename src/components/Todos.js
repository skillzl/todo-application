import "./Todos.scss";

import * as React from "react";

import cns from "@sindresorhus/class-names";

const defaultTodos = [{ text: "Tasks", completed: false }];

export default function Todos() {
  // #region states
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || defaultTodos,
  );

  const [text, setText] = React.useState("");
  // #endregion

  // #region event handlers
  function addTodo() {
    if (text.length > 0) {
      setTodos([...todos, { text, completed: false }]);
      setText("");
    }
  }

  function markTodo(i) {
    const newTodos = [...todos];
    newTodos[i].completed = true;
    setTodos(newTodos);
  }

  function deleteTodo(i) {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  }
  // #endregion

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ul className="todos">
      {/* eslint-disable-next-line no-shadow */}
      {todos.map(({ text, completed }, i) => (
        <li key={i} className={cns("todo", { done: completed })}>
          <span>{text}</span>

          {!completed && (
            <button className="mark" onClick={() => markTodo(i)}>
              &#10003;
            </button>
          )}
          <button className="delete" onClick={() => deleteTodo(i)}>
            &#x2716;
          </button>
        </li>
      ))}

      <li className="todo input">
        <input
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? addTodo() : {})}
          placeholder="Type your task"
          type="text"
          value={text}
        />

        <button className={cns({ visible: text.length > 0 })} onClick={addTodo}>
          &#9166;
        </button>
      </li>
    </ul>
  );
}
