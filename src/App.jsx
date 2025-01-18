import React from "react";
import { TodoProvider } from "./context/TodoContext";
// TODO: Import the TodoProvider from your context directory
import TodoList from "./components/TodoList";
// TODO: Import TodoList component

const App = () => {
 
  return (
    <div>
      <h1>Todo App</h1>
      {/* 
        TODO: Use the TodoProvider to wrap the TodoList and provide context
      */}
      <TodoProvider>
            <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;
