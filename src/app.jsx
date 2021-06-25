import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";

const App = () => {
  const currentDate = new Date();

  const [Id, setId] = useState(0);
  const [todoData, refreshtodoData] = useState([]);

  function createTodoItem(label, minutes, seconds) {
    refreshtodoData([
      ...todoData,
      {
        label,
        minutes,
        seconds,
        id: Id + 1,
        completed: false,
        editing: false,
        showing: true,
        result: `created ${formatDistanceToNow(currentDate, new Date())} ago`,
      },
    ]);
  }

  useEffect(() => {
    setId((id) => id + 1);
    if (Id < 3) {
      createTodoItem("Active task", "3", "30");
    }
  }, [todoData]); //eslint-disable-line

  function deleteItem(id) {
    const findItem = function ({ todoArr }) {
      const idx = todoArr.findIndex((el) => el.id === id);
      const newArray = [...todoArr.slice(0, idx), ...todoArr.slice(idx + 1)];
      refreshtodoData(newArray);
    };
    return findItem;
  }

  function addItem(text, minutes, seconds) {
    if (text && minutes && seconds !== "") {
      const newItem = createTodoItem(text, minutes, seconds);
      return function ({ todoArr }) {
        const newArr = [...todoArr, newItem];
        refreshtodoData(newArr);
      };
    }
    return alert("Введите все 3 значения!");
  }

  function toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  function onToggleCompleted(id) {
    const newArr = toggleProperty(todoData, id, "completed");
    refreshtodoData(newArr);
  }

  function onToggleActive(id) {
    const newArr = toggleProperty(todoData, id, "editing");
    refreshtodoData(newArr);
  }

  function onFilteredCompleted() {
    const newArr = todoData.map((todo) =>
      !todo.completed ? { ...todo, showing: false } : { ...todo, showing: true }
    );
    refreshtodoData(newArr);
  }

  function onFilteredActive() {
    const newArr = todoData.map((todo) =>
      todo.completed ? { ...todo, showing: false } : { ...todo, showing: true }
    );
    refreshtodoData(newArr);
  }

  function allVisible() {
    const newArr = todoData.map((todo) =>
      !todo.showing ? { ...todo, showing: true } : { ...todo }
    );
    refreshtodoData(newArr);
  }

  function clearCompleted() {
    const newArr = todoData.filter((el) => !el.completed);
    refreshtodoData(newArr);
  }

  const completedCount = todoData.filter((el) => el.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <NewTaskForm onItemAdded={addItem} />
      <section className="main">
        <TaskList
          todos={todoData}
          onDeleted={deleteItem}
          onToggleActive={onToggleActive}
          onToggleCompleted={onToggleCompleted}
          onItemAdded={addItem}
        />
        <Footer
          todoCount={todoData.length - completedCount}
          todos={todoData}
          onFilteredCompleted={onFilteredCompleted}
          onFilteredActive={onFilteredActive}
          allVisible={allVisible}
          clearCompleted={clearCompleted}
        />
      </section>
    </section>
  );
};

export default App;
