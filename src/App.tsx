import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';


export type FilterValueType = 'All' | 'Completed' | 'Active'

export  type TodolistType = {
    id: string,
    title: string,
    filter: FilterValueType
}

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ])

    const removeTasks = (id: string) => {
        let filteredTasks = tasks.filter(el => el.id !== id)
        setTasks(filteredTasks)
    }

    const addTasks = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const changeStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(f => f.id === taskId)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }
    }

    let [filter, setFilter] = useState<FilterValueType>('All')

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }


    let tasksForTodolist = tasks
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(el => el.isDone)
    }
    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(el => el.isDone === false)
    }

    let todolists: Array<TodolistType> = [
        {id: v1(), title: 'What to learn', filter: 'All'},
        {id: v1(), title: 'What to buy', filter: 'Completed'}
    ]

    return (


        <div className="App">

            {
                todolists.map((tl) => {
                    return (
                        <Todolist
                            key={tl.id}
                            title={tl.title}
                                  tasks={tasksForTodolist}
                                  removeTasks={removeTasks}
                                  changeFilter={changeFilter}
                                  addTasks={addTasks}
                                  changeStatus={changeStatus}
                                  filter={tl.filter}
                        />
                    )
                })
            }


        </div>
    );
}

export default App;
