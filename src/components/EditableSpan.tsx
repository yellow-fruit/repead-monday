import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    callBack: (newTitle:string)=> void
}

 export const EditableSpan = (props:EditableSpanPropsType) => {
    const [edit, setEdit] = useState(false)
     let [newTitle, setNewTitle] = useState(props.title)

     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
         setNewTitle(e.currentTarget.value)
     }

     const addTask = () => {

         if (newTitle !== "") {
             props.callBack(newTitle);
             //setTitle("");
         }
     }

     const editableSpanHandler = () => {
       setEdit(!edit)
         addTask()
     }
    return (
        edit
        ?<input onChange={onChangeHandler} autoFocus onBlur={editableSpanHandler} value={newTitle}/>
        :<span onDoubleClick={editableSpanHandler}>{props.title}</span>
    );
};

