import React from 'react';
import Todo from './TodoListItem';

const TodoList = ({ todos, updateTodo, deleteTodo, toggle, setToggle, toggleAllCompleted, filterType }) => {

    // const [editingId, setEditingId] = useState(null)

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
                            // isEditing={isEditing === todo.id}
                            // setEditingId={setEditingId}
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