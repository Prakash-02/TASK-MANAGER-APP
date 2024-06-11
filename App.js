import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: uuidv4(), text: task, completed: false }]);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
