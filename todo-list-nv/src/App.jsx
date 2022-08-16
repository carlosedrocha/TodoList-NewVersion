import React, { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { URL } from '../src/api/index.js';

import Axios from 'axios';

import './index.css'
import './components/style.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState({
    all: true,
    active: false,
    completed: false
  })


  useEffect(() => {
    Axios.get(URL).then((res) => {
      setTodos(res.data);
    })
      .catch((err) => { console.log(err) });
  }, [filterType]);

  //ACIMA

  const getAllCompleted = () => {

    Axios.get(`${URL}/completed`)
      .then((res) => {
        console.log("chamado")

        setTodos(res.data);
      })
      .catch((err) => { console.log(err) });

  };

  const deleteTodo = (todo) => {
    Axios.delete(`${URL}/${todo.id}`)
      .then(() => {
        setTodos(
          todos.filter(item => {
            return item.id != todo.id;
          })
        )
      })
      .catch(err => { console.log(err) });
  };

  const updateTodo = (todo) => {

    Axios.put(URL, {
      id: todo.id,
      title: todo.title,
      done: todo.done
    }).then(() => { })
      .catch(err => { console.log(err) });

    // setTodos([todo, ...todos]);
  };

  const addTodo = (todo) => {
    Axios.post(`${URL}`, {
      title: todo.title,
      done: 0
    })
      .then(res => { })
      .catch(err => { console.log(err) });

    //
    setTodos([todo, ...todos]);
  };

  return (
    <section className="todoapp">
      <TodoForm
        addTodo={addTodo}
        todos={todos}
      />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        setFilterType={setFilterType}


      />

      <Footer
        todos={todos}
        getAllCompleted={getAllCompleted}
        setFilterType={setFilterType}
        filterType={filterType}
      />

    </section>
  )
}

export default App
