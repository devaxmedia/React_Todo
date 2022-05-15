import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Date created</th>
          </tr>
        </thead>

        <tbody>
          {props.datas.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoItem;
