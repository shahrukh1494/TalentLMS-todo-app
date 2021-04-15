import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";

function App() {
  const [todos, setTodos] = useState(todosData);

  function handleChange(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const todoItems = todos.map((item) => (
    <TodoItem key={item.id} item={item} handleChange={handleChange} />
  ));

  return <div className="todo-list">{todoItems}</div>;
}

export default App;
