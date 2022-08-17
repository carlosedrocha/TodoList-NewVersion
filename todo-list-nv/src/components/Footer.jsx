import React from 'react'
import { useState } from 'react';

function Footer({ todos, updateFilter, filterType }) {

    const isPlural = todos.length > 1 ? "items" : "item";

    const handleFilterUpdate = (option) => {
        updateFilter(option);
        console.log(option)
    }

    return (
        <footer className='footer'>
            <span className="todo-count">
                <span className=""><strong>{todos.length}</strong></span>
                <span className=""> </span>
                <span className="">{isPlural}</span>
                <span className=""> </span>
                <span className="">left</span>
            </span>

            <ul className="filters" >
                <li >
                    <a
                        href="/"
                        className={`${filterType.all === true ? 'selected' : ''}`}
                        onClick={handleFilterUpdate("all")}
                    >
                        All
                    </a>
                </li>
                <span> </span>
                <li >
                    <a
                        href="/active"
                        className={`${filterType.active === true ? 'selected' : ''}`}
                        onClick={handleFilterUpdate("active")}
                    >
                        Active
                    </a>
                </li>
                <span> </span>
                <li >
                    <a
                        href="/completed"
                        className={`${filterType.completed === true ? 'selected' : ''}`}
                        onClick={handleFilterUpdate("completed")}
                    >
                        Completed
                    </a>
                </li>
            </ul>
        </footer>
    )
}



export default Footer