import React, { useContext, useState, useEffect } from "react";
import { ADD_TODO } from "../Reducers/todos";
import { TodoContext } from "../Contexts/TodoContext";
import Button from "./Button";

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [nextTodoId, setIndex] = useState(1);
  const [inputValue, setValue] = useState('');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!inputValue.trim()) {
            return;
          }
          dispatch({
            type: ADD_TODO,
            payload: {
              id: nextTodoId,
              completed: false,
              text: inputValue
            }
          });
          setIndex(nextTodoId + 1);
          setValue('')
        }}
      >
        <input type="text" value={inputValue} onChange={(e) => setValue(e.target.value)}/>
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};


export default AddTodo;