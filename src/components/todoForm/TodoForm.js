import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/TodoActions';
import { v4 as uuidv4 } from 'uuid';
import { FaPlusCircle } from 'react-icons/fa';
import './todoForm.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      const newTodo = { id: uuidv4(), text };
      dispatch(addTodo(newTodo));
      setText('');
    }
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Add a todo..."
        />
        <FaPlusCircle type="submit" className="add-button" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default TodoForm;