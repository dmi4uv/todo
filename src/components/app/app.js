import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../Item-status-filter";
import "./app.css"


class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: "id1"},
            {label: 'Make app', important: true, id: "id2"},
            {label: 'Lunch', important: false, id: "id3"}
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            return {
                todoData: newArray
            }
        })
    }

    render() {


        return (
            <div className="app">
                <AppHeader toDo="3" done="0"/>
                <SearchPanel/>
                <ItemStatusFilter/>
                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteItem}/>
            </div>
        )
    }


}

export default App