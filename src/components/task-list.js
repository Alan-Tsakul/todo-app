import React from 'react';


import Task from './task'

import { formatDistanceToNow } from 'date-fns';

var result = formatDistanceToNow(
    new Date()
  );




const TaskList = () => {
  
    return (
        <ul className="todo-list">
            <Task className="completed" text="Completed task" date = {result} id="1"/>
            <Task className="editing" text="Editing task" date= {result} id="2"/>
            <Task text="Active task" date= {result} id="3"/>
        </ul>
    );
};



export default TaskList;