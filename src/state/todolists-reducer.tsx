import {TodolistType} from "../App";
import {v1} from "uuid";


export const todolistsReducer = (state: Array<TodolistType>, action: tsarType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            /*//достанем нужный массив по todolistId:
            let todolistTasks = tasks[todolistId];
            // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
            tasks[todolistId] = todolistTasks.filter(t => t.id != id);
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            setTasks({...tasks});*/
            return state.filter(t=>t.id!==action.payload.todolistId1)
        }
        case 'ADD-TODOLIST':{
            //let newTodolistId = v1();
            let newTodolist: TodolistType = {id: v1(), title: action.payload.newTodolistTitle, filter: 'all'};
            //setTodolists([newTodolist, ...todolists]);
            //setTasks({
            //   ...tasks,
            //   [newTodolistId]: []
            //})
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE":{
            // найдём нужный todolist
            //const todolist = todolists.find(tl => tl.id === id);
            //if (todolist) {
                // если нашёлся - изменим ему заголовок
                //todolist.title = title;
                //setTodolists([...todolists]);
            }
            return{
        }
        default:
            return state

    }
}

type tsarType = removeTodolistACType|addTodolistACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId1: todolistId1
        }
    }as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTodolistTitle:string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            newTodolistTitle
        }
    }as const
}

