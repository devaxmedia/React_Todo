import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  return (
    <div>
      <TodoForm datas={props.todosData} onAddTodo={props.onAddTodo}></TodoForm>
      <TodoItem datas={props.todosData}></TodoItem>
    </div>
  );
};

export default Todo;
