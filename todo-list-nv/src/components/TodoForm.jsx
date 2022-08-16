import React, { useState } from 'react';

import { URL } from '../api/index.js'
import Axios from 'axios';

const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        id: "",
        title: "",
        done: 0
    });

    const handleInput = (event) => {
        setTodo({ ...todo, title: event.target.value });
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    // };

    const handleSubmit = () => {

        if (todo.title) {
            addTodo(todo);
            setTodo({ title: "" });
        }
    };


    const onEnterPressed = (event) => {
        const enterCode = 13;
        const isEnter = event.keyCode === enterCode;

        if (isEnter) {
            handleSubmit();
        }

    }

    return (
        <header className="header">
            <h1>todos</h1>

            <div>
                <input className='new-todo'
                    name="title"
                    type="text"
                    value={todo.title}
                    onChange={handleInput}
                    placeholder="What needs to be done?"
                    autoFocus
                    onKeyDown={onEnterPressed}
                />
            </div>
        </header>
    )
};

export default TodoForm;