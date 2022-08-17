import React from 'react';
import { useState } from 'react';
import Todo from './TodoListItem';

const TodoList = ({ todos, updateTodo, setTodos, deleteTodo, toggle, setToggle, toggleAllCompleted }) => {

    const handleToggleAllCompleted = () => {
        if (toggle === false) {
            setToggle(true);
        } else {
            setToggle(false);
        }
        toggleAllCompleted(toggle);
    };

    return (
        <section className='main'>
            <input
                id='toggle-all'
                className='toggle-all'
                type="checkbox"
            />
            <label
                htmlFor='toggle-all'
                onClick={handleToggleAllCompleted}
            />

            <ul className="todo-list">
                {todos.length > 0 && todos.map(todo =>
                    <Todo
                        todo={todo}
                        key={todo.id}
                        updateTodo={updateTodo}
                        onDoubleClick={() => { }}
                        setTodos={setTodos}
                        todos={todos}
                        deleteTodo={deleteTodo}
                    />
                )}
            </ul>

        </section>
    )
};

export default TodoList;