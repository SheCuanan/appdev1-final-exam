import React, { useState } from "react";
// TODO: Import TodoForm component
import { useTodos } from "../context/TodoContext";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {/* 
        TODO: Render TodoForm with the required props (addTodo, newTodo, setNewTodo)
      */
        <TodoForm addTodo={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* 
              TODO: Apply conditional styling for completed todos (e.g., strikethrough)
            */}

            {/* TODO: Make the todo title clickable to toggle its completion status */}
            <span 
              onClick={() => toggleComplete(todo.id)} 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.title}
            </span>

            {/* TODO: Implement a delete button to remove a todo */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;