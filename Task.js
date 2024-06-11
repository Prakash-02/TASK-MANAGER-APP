import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, removeTask, toggleComplete }) => {
  return (
    <li>
      <button
        type="button"
        style={{ textDecoration: task.completed ? 'line-through' : '' }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </button>
      <input type="button" value="x" onClick={() => removeTask(task.id)} />
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default Task;
