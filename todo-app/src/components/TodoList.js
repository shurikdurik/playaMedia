import Todo from './Todo';

const TodoList = ({ todos, onToggle }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          checked={todo.checked}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;





