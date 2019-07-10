import React, { useReducer, createContext } from "react";
import toDoReducer, { VisibilityFilters } from "./../Reducers/todos";

const TodoContext = createContext()

const initialState = {todos : [], filter: VisibilityFilters.SHOW_ALL}

function TodoContextProvider(props){
    const [state, dispatch] = useReducer(toDoReducer, initialState)
    const value = { state, dispatch }

    return (
        <TodoContext.Provider value={value}>{ props.children }</TodoContext.Provider>
    )
}

export { TodoContext, TodoContextProvider }