/* eslint-disable react/jsx-filename-extension */
// /* eslint-disable react/sort-comp */
// /* eslint-disable no-plusplus */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { formatDistanceToNow } from "date-fns";

import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";

export default class App extends Component {
  minId = 100;
  currentDate = new Date();

  state = {
    todoData: [
      this.createTodoItem("Active task"),
      this.createTodoItem("Active task"),
      this.createTodoItem("Active task"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      // eslint-disable-next-line no-plusplus
      id: this.minId++,
      completed: false,
      editing: false,
      showing: true,
      result: `created ${formatDistanceToNow(this.currentDate, new Date())} ago`
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    if (text !== "") {
      const newItem = this.createTodoItem(text);
      this.setState(({ todoData }) => {
        const newArr = [...todoData, newItem];
        return {
          todoData: newArr,
        };
      });
    } else {
      alert("Введите задачу в форму!!!");
    }
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, "completed"),
    }));
  };

  onToggleActive = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, "editing"),
    }));
  };

  onFilteredCompleted = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) =>
        !todo.completed ? { ...todo, showing: false } : { ...todo, showing: true},
      ),
    }));
  };

  onFilteredActive = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) =>
        todo.completed ? { ...todo, showing: false } : { ...todo, showing: true}
      ),
    }));
  };

  allVisible = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) =>
        !todo.showing ? { ...todo, showing: true } : { ...todo }
      ),
    }));
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      let newArr = [];
      newArr = todoData.filter((el) => !el.completed);
      return {
        todoData: newArr,
      };
    });
  };

  render = () => {
    const { todoData } = this.state;

    const completedCount = todoData.filter((el) => el.completed).length;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
        </header>
        <NewTaskForm onItemAdded={this.addItem} />
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.deleteItem}
            onToggleActive={this.onToggleActive}
            onToggleCompleted={this.onToggleCompleted}
            onItemAdded={this.addItem}
          />
          <Footer
            todoCount={todoData.length - completedCount}
            todos={todoData}
            onFilteredCompleted={this.onFilteredCompleted}
            onFilteredActive={this.onFilteredActive}
            allVisible={this.allVisible}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    );
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
