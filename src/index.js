import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';



const App = () => {
   
   return (
        <section className="todoapp"> 
        <header className="header">
        <h1>todos</h1>
        </header>
          <NewTaskForm />
             <section className="main">
            <TaskList />
            <Footer />
               </section>
               </section>         
    );
};




ReactDOM.render(<App />, 
    document.getElementById("root"));

