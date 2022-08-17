import React from 'react'
import { useState } from "react";

function Footer({ todos, filterType, updateFilter }) {

    const isPlural = todos.length > 1 ? "items" : "item";
    const [editFilter, setEditFilter] = useState({
        all: filterType.all,
        active: filterType.active,
        completed: filterType.completed,

    });

    const handleFilterUpdate = (option) => {
        if (option === "active") {
            setEditFilter({
                all: false,
                active: true,
                completed: false
            });
        }
        else if (option === "completed") {
            setEditFilter({
                all: false,
                active: false,
                completed: true
            });
        }
        else if (option === "all") {
            setEditFilter({
                all: true,
                active: false,
                completed: false
            });
        };

        // console.log("filterType", filterType)
        // console.log(option)
        updateFilter(editFilter);
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
                        onClick={(e) => e.preventDefault() + handleFilterUpdate("all")}
                    >
                        All
                    </a>
                </li>
                <span> </span>
                <li >
                    <a
                        href="/active"
                        className={`${filterType.active === true ? 'selected' : ''}`}
                        onClick={(e) => e.preventDefault() + handleFilterUpdate("active")}
                    >
                        Active
                    </a>
                </li>
                <span> </span>
                <li >
                    <a
                        href="/completed"
                        className={`${filterType.completed === true ? 'selected' : ''}`}
                        onClick={(e) => e.preventDefault() + handleFilterUpdate("completed")}
                    >
                        Completed
                    </a>
                </li>
            </ul>
        </footer>
    )
}



export default Footer