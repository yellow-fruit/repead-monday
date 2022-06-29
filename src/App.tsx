import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import { v1 } from 'uuid';


export type FilterValueType = 'All'|'Completed'|'Active'

function App() {
    
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ])

    let [filter , setFilter] = useState<FilterValueType>('All')

    const addTasks = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const removeTasks = (id: string) => {
        let filteredTasks = tasks.filter(el => el.id !== id)
        setTasks(filteredTasks)
    }
    
    const changeFilter = (value:FilterValueType) => {
      setFilter(value)
    }

    let tasksForTodolist = tasks
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(el=> el.isDone)
    }
    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(el=> el.isDone===false)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTasks = {addTasks}
            />

        </div>
    );
}

export default App;
