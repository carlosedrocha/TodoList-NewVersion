import React from 'react';
import Todo from './TodoListItem';

const TodoList = ({ todos, updateTodo, setTodos, deleteTodo }) => {

    return (
        <section className='main'>
            <input
                id='toggle-all'
                className='toggle-all'
                type="checkbox"
            />
            <label htmlFor='toggle-all' />

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