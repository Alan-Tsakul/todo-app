import React from 'react';





const Task = (props) => {

    return (
        <li>
        <div className="view">
           <input className="toggle" type="checkbox"/>
           <label>
           <span className="description">{props.text}</span>
            <span className="created">{props.date}</span>
           </label>
           <button className="icon icon-edit"></button>
           <button className="icon icon-destroy"></button>
         </div>
        </li>
    );
};


export default Task;

