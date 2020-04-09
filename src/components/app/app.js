import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../Item-status-filter";
import ItemAddForm from "../item-add-form";
import "./app.css"


class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Make coffe'),
            this.createTodoItem('Make coffe'),
            this.createTodoItem('Make coffe'),

        ]
    }

    createTodoItem(label) {
        return {
            label: label,
            imortant: false,
            done: false,
            id: this.maxId++
        }
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

    addItem = (text) => {
        const newItem = {
            label: text,
            imortant: false,
            id: this.maxId++
        }
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem]
            return {todoData: newArr}
        })
    }

    toggleProperty(arr, id, propName)  {
        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]:!oldItem[propName]}
        return [...arr.slice(0, idx),newItem, ...arr.slice(idx + 1)]

}

    onToggleDone = (id) => {
        this.setState(({todoData})=> {
            return{
                todoData: this.toggleProperty(todoData,id, 'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todoData})=> {
            return{
                todoData: this.toggleProperty(todoData,id, 'important')
            }
        })

    }

    render() {
        const {todoData} = this.state
        const doneCount = todoData.filter((el) => el.done).length
        const todoCount = todoData.length - doneCount
        return (
            <div className="app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <SearchPanel/>
                <ItemStatusFilter/>
                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onAddItem={this.addItem}/>
            </div>
        )
    }


}

export default App