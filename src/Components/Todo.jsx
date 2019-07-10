import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import { TOGGLE_TODO } from '../Reducers/todos'

function Todo({id, completed, text }) {
    const { dispatch } = useContext(TodoContext)

    return (
        <li
            onClick={e => dispatch({ type: TOGGLE_TODO, payload: { id, completed: !completed } })}
            style={{ cursor: "pointer", textDecoration: completed ? "line-through" : "none" }}
        >
            {text}
        </li>
    );
}

export default Todo