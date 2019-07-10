import React from "react";

import './App.css'

import { TodoContextProvider } from './Contexts/TodoContext'

import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import Footer from './Components/Footer'

function App() {
  return (
    <TodoContextProvider>
      <AddTodo />
      <TodoList />
      <Footer />
    </TodoContextProvider >
  );
}

export default App;
