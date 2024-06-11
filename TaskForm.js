import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
