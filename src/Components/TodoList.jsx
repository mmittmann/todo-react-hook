import React, { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext'
import { VisibilityFilters } from '../Reducers/todos'
import Todo from './Todo'

export default function TodoList() {
  const { state } = useContext(TodoContext)
  console.log(state)
  const todos = applyFilter(state)
  return (
    todos.map(todo => <Todo key={todo.id} {...todo}/>)
  );
}

const applyFilter = state => {
  const { filter, todos } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};