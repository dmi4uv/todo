import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../Item-status-filter";
import "./app.css"


const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important : false, id: "id1"},
        {label: 'Make app', important : true, id: "id2"},
        {label: 'Lunch', important : false, id: "id3"}
    ]

    return (
        <div className="app">
            <AppHeader toDo="3" done="0"/>
            <SearchPanel/>
            <ItemStatusFilter/>
            <TodoList todos={todoData}/>
        </div>
    )
}

export default App