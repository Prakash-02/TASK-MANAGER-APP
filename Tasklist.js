import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, removeTask, toggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TaskList;
