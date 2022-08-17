import React from "react";
import { useState } from "react";

const Todo = ({ todo, updateTodo, setTodos, todos, deleteTodo }) => {

    const [editTodo, setEditTodo] = useState({
        id: todo.id,
        title: todo.title,
        done: todo.done,
        isEditing: 0
    });

    // useEffect(() => {
    //     console.log('test')
    // }, [setEditTodo])

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

    const handleTitleChange = (e) => {
        const isEditingReturn = (todo.isEditing === 1 ? 0 : 1);
        setEditTodo({
            id: todo.id,
            title: e.target.value,
            done: todo.done,
            isEditing: isEditingReturn
        })
        updateTodo(editTodo)
    };

    return (
        <li className={`${todo.done === 1 ? "completed" : ""}` + `${todo.isEditing === 1 ? "editing" : ""}`} key={todo.id}>
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
        </li>
    )
}





export default Todo;