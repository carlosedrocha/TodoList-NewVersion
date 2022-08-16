import React from 'react'
import { useState } from 'react';

function Footer({ todos, getAllCompleted, setFilterType, filterType }) {

    const isPlural = todos.length > 1 ? "items" : "item";
    const [editFilterType, setEditFilterType] = useState({
        all: filterType.all,
        active: filterType.active,
        completed: filterType.completed,
    });

    // const changeFilter = (option) => {
    //     if (option === "all") {
    //         setEditFilterType({
    //             all: true,
    //             active: false,
    //             completed: false
    //         })
    //     }
    //     else if (option === "active") {
    //         setEditFilterType({
    //             all: false,
    //             active: true,
    //             completed: false
    //         })
    //     }
    //     else if (option === "completed") {
    //         setEditFilterType({
    //             all: false,
    //             active: false,
    //             completed: true
    //         })
    //     }

    //     return setFilterType(editFilterType)
    // }


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
                <li>
                    <a
                        href="/"
                        className=""
                        onClick={changeFilter("all")}
                    >
                        All
                    </a>
                </li>
                <span> </span>
                <li>
                    <a
                        href="/active"
                        className=""
                        onClick={changeFilter("active")}
                    >
                        Active
                    </a>
                </li>
                <span> </span>
                <li>
                    <a
                        href="/completed"
                        className=""
                        onClick={changeFilter("completed")}
                    >
                        Completed
                    </a>
                </li>
            </ul>

        </footer>
    )
}



export default Footer