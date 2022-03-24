import React from "react";
import { Todo } from "./../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos__single">
      <span className="todos__single--text">
        <div>
          <span className="icon">✏️</span>
          <span className="icon">🗑️</span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            ✅
          </span>
        </div>
      </span>
    </form>
  );
};

export default SingleTodo;
