import React from "react"
import TodoItem from "./components/TodoItem"


function Todo(){
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}
export default Todo