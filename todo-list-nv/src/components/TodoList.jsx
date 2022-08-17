import React from 'react';
import { useState } from 'react';
import Todo from './TodoListItem';

const TodoList = ({ todos, updateTodo, deleteTodo, toggle, setToggle, toggleAllCompleted, filterType }) => {

    const handleToggleAllCompleted = () => {
        if (toggle === false) {
            setToggle(true);
        } else {
            setToggle(false);
        }
        toggleAllCompleted(toggle);
    };

    // const filterVerification = (todo) => {
    //     if (filterType.active === true) return (todo.done == false);
    //     if (filterType.completed === true) return (`todo.done == true`);
    // };

    // let r = filterVerification();
    // console.log(r);

    // console.log(filterType.active === true)
    // console.log(filterType)

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
                {todos.length > 0 && todos.map(todo => {

                    //CONDICAO PARA FILTRAGEM
                    if (filterType.active === true && todo.done === 0) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                updateTodo={updateTodo}
                                onDoubleClick={() => { }}
                                deleteTodo={deleteTodo}
                            />
                        )
                    }
                    //CONDICAO PARA FILTRAGEM
                    if (filterType.completed === true && todo.done === 1) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                updateTodo={updateTodo}
                                onDoubleClick={() => { }}
                                deleteTodo={deleteTodo}
                            />
                        )
                    }

                    //CONDICAO PARA FILTRAGEM
                    if (filterType.all === true) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                updateTodo={updateTodo}
                                onDoubleClick={() => { }}
                                deleteTodo={deleteTodo}
                            />
                        )
                    }


                }
                )}
            </ul>

        </section>
    )
};

export default TodoList;