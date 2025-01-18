import React, { createContext, useState, useEffect } from "react";
// TODO: Create a context for the Todo app (use createContext)

const TodoContext = createContext();
// TODO: Implement a function to fetch todos from the API (Hint: Use the JSONPlaceholder API)
  // The API endpoint is "https://jsonplaceholder.typicode.com/todos?_limit=10"
const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const data = await response.json();
  return data;
};
 // TODO: Initialize state for todos and loading
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: Implement useEffect to fetch todos when the component mounts
  useEffect(() => {
    const loadTodos = async () => {
      const fetchedTodos = await fetchTodos();
      setTodos(fetchedTodos);
      setLoading(false);
    };
    loadTodos();
  }, []);

    // TODO: Implement addTodo function to add a new todo to the list
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, {id: todos.length + 1, title: newTodo, completed: false} ]);
  };

    // TODO: Implement deleteTodo function to remove a todo by its ID
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

   // TODO: Implement toggleComplete function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos((prevTodos) => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, loading, addTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};


// TODO: Implement a custom hook (useTodos) to consume the TodoContext and return the values
// Make sure to check if the hook is used outside of the provider

export const useTodos = () => {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};