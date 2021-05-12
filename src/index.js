import React, { Component } from "react";
import ReactDOM from "react-dom";
import { formatDistanceToNow } from "date-fns";



import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";

export default class App extends Component {
  maxId = 100;
  currentDate = new Date();
  createDate = new Date('2021-05-12T11:00:00'); 
  time = formatDistanceToNow(this.createDate, this.currentDate);
  result = 'created ' + this.time + ' ago';

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
      id: this.maxId++,
      completed: false,
      editing: false,
      hidden: false,
      result: this.result
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
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  toggleProperty = (arr, id, labelName, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      label: [labelName],
      [propName]: !oldItem[propName],
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(
          todoData,
          id,
          "Completed task",
          "completed"
        ),
      };
    });
  };

  onToggleActive = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "Editing task", "editing"),
      };
    });
  };

  onFilteredCompleted = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((todo) =>
          !todo.completed ? { ...todo, hidden: true } : { ...todo }
        ),
      };
    });
  };

  onFilteredActive = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((todo) =>
          todo.completed ? { ...todo, hidden: true } : { ...todo }
        ),
      };
    });
  };

  allVisible = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((todo) =>
          todo.hidden ? { ...todo, hidden: false } : { ...todo }
        ),
      };
    });
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
