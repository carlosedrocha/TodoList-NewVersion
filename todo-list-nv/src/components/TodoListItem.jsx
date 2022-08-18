import React from "react";
import { useState } from "react";

const Todo = ({ todo, updateTodo, deleteTodo }) => {

    const [editTodo, setEditTodo] = useState({
        id: todo.id,
        title: todo.title,
        done: todo.done,
        isEditing: 0
    });

    const [newTaskTitle, setNewTaskTitle] = useState(editTodo.title);

    const handleChange = (e) => {
        setEditTodo({
            id: todo.id,
            title: todo.title,
            done: !todo.done,
        })
        updateTodo(editTodo)
    };

    const handleDeleteAction = (e) => {
        setEditTodo({
            id: todo.id,
            title: todo.title,
            done: todo.done,
        })
        deleteTodo(todo)
    };

    const handleTitleChange = () => {
        setEditTodo({
            id: todo.id,
            title: newTaskTitle ? newTaskTitle : todo.title,
            done: todo.done,
            isEditing: editTodo.isEditing === 1 ? 0 : 1,
        });
    };

    const changeTodoTitle = (e) => {
        setNewTaskTitle(e.target.value);
    };

    const onEnterPressed = (e) => {
        const enterCode = 13;
        const escCode = 27;
        if (e.keyCode === enterCode) {
            setEditTodo({
                id: todo.id,
                done: todo.done,
                title: newTaskTitle
            });
            console.log(newTaskTitle, editTodo.title)
            updateTodo(editTodo);
        }
        // if (e.keyCode === escCode) {
        //     setEditTodo({ title: todo.title });
        // }
    }
    return (
        <li className={`${todo.done === 1 ? "completed" : ""}` + `${editTodo.isEditing === 1 ? "editing" : ""}`} key={todo.id}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.done === 1 ? true : false}
                    onChange={handleChange}
                />
                <label
                    onDoubleClick={handleTitleChange}
                >
                    {todo.title}
                </label>
                <button
                    className="destroy"
                    onClick={handleDeleteAction}
                />
            </div>
            {editTodo.isEditing == 1 &&
                (
                    <input
                        className="edit"
                        value={newTaskTitle}
                        onChange={changeTodoTitle}
                        onKeyDown={onEnterPressed}
                        autoFocus
                        name="title"
                        type="text"
                    />
                )
            }
        </li>
    )
}





export default Todo;