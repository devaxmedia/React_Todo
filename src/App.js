import { useState } from "react";

import Todo from "./components/Todos/Todo";

import "./App.css";

const DUMMY_TODOS_DATA = [
  {
    id: 1,
    description: "Go to work and finsihed the jobs",
    dateCreated: new Date().toLocaleString("en-us", {
      dateStyle: "long",
      timeStyle: "short"
    })
  }
];

function App() {
  const [todosData, setTodos] = useState(DUMMY_TODOS_DATA);

  const addedTodoHandler = (addedTodo) =>
    setTodos((previouseTodos) => [...previouseTodos, addedTodo]);

  return (
    <div className="App">
      <Todo todosData={todosData} onAddTodo={addedTodoHandler}></Todo>
    </div>
  );
}

export default App;
