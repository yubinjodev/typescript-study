import React from "react";
import { Todo } from "./../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC = ({ todos, setTodos }) => {
  return <div className="todos">{}</div>;
};
