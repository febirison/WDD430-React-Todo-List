import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos'}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;