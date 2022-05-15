import { useState } from "react";

import "./TodoForm.css";

function TodoForm(props) {
  const [inputDescriptionValue, setDescriptionValue] = useState("");

  const descriptChangeHandler = (e) => setDescriptionValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const todo = {
      id: props.datas.length + 1,
      description: inputDescriptionValue,
      dateCreated: new Date().toLocaleString("en-us", { dateStyle: "long", timeStyle: "short" }),
    };

    props.onAddTodo(todo);

    setDescriptionValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={descriptChangeHandler} value={inputDescriptionValue} placeholder="enter your text here..." />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default TodoForm;
